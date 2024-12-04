const decryptPassword = (encodedPassword) => {
    try {
        // Convert from Base64 back to plain text
        return Buffer.from(encodedPassword, 'base64').toString()
    } catch (error) {
        console.error('Decoding error:', error)
        throw new Error('Failed to decode password')
    }
}

export default decryptPassword