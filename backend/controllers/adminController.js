const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); // Import bcrypt

// Generate a 256-bit (32-byte) secret key
const secretKey = crypto.randomBytes(32).toString('hex');

const adminCredentials = {
    email: 'admin@gmail.com',
    // Store the hashed password instead of plain text
    passwordHash: bcrypt.hashSync('admin123123', 10), // Hash the password
};

exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
console.log(email,password)
    try {
        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, adminCredentials.passwordHash);
        console.log('Password:', password);
        console.log('Password Hash:', adminCredentials.passwordHash);

        // const isPasswordValid = await bcrypt.compare(password, adminCredentials.passwordHash);

        console.log('Is Password Valid:', isPasswordValid);

        if (email === adminCredentials.email && isPasswordValid) {
            const token = jwt.sign({ email: adminCredentials.email }, secretKey);
            return res.json({ token });
        }

        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.log('Password:', password);
        console.log('Password Hash:', adminCredentials.passwordHash)
        console.log(email);
        ;


        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
