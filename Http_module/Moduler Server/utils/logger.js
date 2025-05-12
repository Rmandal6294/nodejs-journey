const logger = (method, url) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
}
export default logger