    const express = require("express");
    const multer = require("multer");
    const supabase = require("../supabaseClient"); // Import Supabase client
    const router = express.Router();

    // Configure Multer for file uploads
    const upload = multer({ storage: multer.memoryStorage() });

    // Render Home Page
    router.get("/home", (req, res) => {
        res.render("home");
    });

    // Handle File Upload
    router.post("/upload", upload.single("file"), async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ success: false, message: "No file uploaded." });
            }
    
            // Sanitize and set file path
            const fileName = req.file.originalname.replace(/[^a-zA-Z0-9._-]/g, ""); 
            const filePath = `uploads/${Date.now()}_${fileName}`;
    
            // Upload to Supabase
            const { data, error } = await supabase.storage
                .from("media-uploads")
                .upload(filePath, req.file.buffer, { contentType: req.file.mimetype });
    
            if (error) {
                console.error("Upload Error:", error);
                return res.status(500).json({ success: false, message: "Upload failed." });
            }
    
            // Get Public URL
            const { data: urlData } = supabase.storage.from("media-uploads").getPublicUrl(filePath);
    
            return res.json({ success: true, url: urlData.publicUrl });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Server error." });
        }
    });
    


    module.exports = router;
