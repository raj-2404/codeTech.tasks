require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};


app.post('/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [username, email, hashedPassword]);
            
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return res.status(400).json({ error: 'User not found' });
        
        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT blogs.id, blogs.title, blogs.content, users.username as author, blogs.created_at 
            FROM blogs 
            JOIN users ON blogs.author_id = users.id
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/blogs', authenticateToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        await db.execute('INSERT INTO blogs (title, content, author_id) VALUES (?, ?, ?)', 
            [title, content, req.user.id]);
        res.status(201).json({ message: 'Blog created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/blogs/:id', async (req, res) => {
    try {
        const [blog] = await db.execute('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        if (blog.length === 0) return res.status(404).json({ message: 'Blog not found' });

        const [comments] = await db.execute(`
            SELECT comments.content, users.username 
            FROM comments 
            JOIN users ON comments.user_id = users.id 
            WHERE blog_id = ?`, [req.params.id]);

        res.json({ blog: blog[0], comments });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/blogs/:id/comments', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;
        await db.execute('INSERT INTO comments (content, user_id, blog_id) VALUES (?, ?, ?)', 
            [content, req.user.id, req.params.id]);
        res.status(201).json({ message: 'Comment added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});