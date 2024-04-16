import Venue from '../models/VenueScheme.js'
export const venue=async(req,res)=>{
    const{email,name,phone,date}=req.body;
   
    try {
        // 1. Sanitize and validate user input:
        const { email, name, phone, date } = req.body;

        // Replace with appropriate sanitization functions for your framework/library
        const sanitizedEmail = email.trim().toLowerCase(); // Example sanitization (trimming and lowercase)
        const validatedName = name.trim(); // Trim spaces from name

        // 2. Perform additional validation (optional):
        // Add custom validation checks if needed for specific requirements

        // 3. Create a new venue:
        const newVenue = new Venue({
            email: sanitizedEmail,
            name: validatedName,
            phone, 
            date: new Date(date).toISOString() // Ensure date is stored in ISO format
        });

        // 4. Additional validation (optional):
        // If your schema defines additional validation rules, use `newVenue.validateSync()` to check for errors before saving.

        // 5. Save the new venue to the database:
        await newVenue.save();

        // 6. Respond with a success message:
        res.status(201).json({ success: true, message: 'Venue booked successfully' });
    } catch (error) {
        // 7. Handle errors:
        console.error('Error booking venue:', error);

        // Provide a more informative error message:
        let errorMessage = 'Internal server error';
        if (error.name === 'ValidationError') {
            errorMessage = 'Validation error: ' + error.message;
        } else if (error.name === 'MongoError') {
            errorMessage = 'Database error: ' + error.message;
        }

        res.status(500).json({ success: false, message: errorMessage });
    }

};