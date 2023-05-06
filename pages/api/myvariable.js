export default (req, res) => {
  const myVariable = process.env.PRIVATE_KEY || 'default-value';
  res.status(200).json({ myVariable });
};