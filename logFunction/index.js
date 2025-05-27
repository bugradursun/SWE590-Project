exports.logFunction = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // Preflight (OPTIONS) isteğine boş cevap ver
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  console.log("🌀 Cloud Function triggered with:", req.body);
  res.status(200).send({ message: "Success from Cloud Function GEN1" });
};
