const getTopicsHandler = async (req, res) => {
  try {
    // Access questions collection from request
    const topicsCollection = req.topicsCollection;

    // Fetch all questions (excluding sensitive data like passwords)
    const document = await topicsCollection.find({}).toArray();
    console.log('document', document);

    res.status(200).json({
      data: document[0],
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching questions.',
    });
  }
};

export default getTopicsHandler;
