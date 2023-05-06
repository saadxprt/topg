export default function handler(req, res) {
  const myVariable = process.env.PRIVATE_KEY || "4d0d9d9d4b7cab8986aa90db0c7ed07964a8acf5405bbf746aebd7f1c80e87b6";
  res.status(200).send(myVariable);
}