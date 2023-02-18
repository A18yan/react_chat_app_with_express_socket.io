export const response = (res, server_status, message, status) => {
    return res.status(server_status).json({ message, status });
}