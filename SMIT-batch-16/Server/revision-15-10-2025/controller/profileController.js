// Placeholder for user profiles (replace with database logic)
let profiles = [];

exports.createProfile = (req, res) => {
  // req.file contains the uploaded file info
  // req.body contains text fields
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { name, contact } = req.body;
  const newProfile = {
    id: profiles.length + 1,
    name,
    contact,
    imagePath: `/uploads/${req.file.filename}`, // Store the path to the image
  };
  profiles.push(newProfile);
  res.status(201).json({ 
    message: 'Profile created successfully', 
    profile: newProfile 
  });
};

exports.getProfiles = (req, res) => {
  res.status(200).json(profiles);
};

exports.getProfileById = (req, res) => {
    const profile = profiles.find(p => p.id === parseInt(req.params.id));
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(profile);
};

// Update and Delete operations would involve similar logic, including deleting the old file from the filesystem if updated, etc.
