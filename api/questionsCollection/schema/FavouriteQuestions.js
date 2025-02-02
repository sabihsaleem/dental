const updateFavouriteHandler = async (req, res) => {
  try {
    const {questionsCollection} = req;
    const {topicId, id} = req.body;

    if (!topicId || !id) {
      return res.status(400).json({
        success: false,
        message: 'Please provide valid topicId and question id',
      });
    }

    // Find the current isFavourite status of the question
    const questionData = await questionsCollection.findOne(
      {'questions.id': id, 'questions.topicID': topicId},
      {projection: {'questions.$': 1}},
    );

    if (
      !questionData ||
      !questionData.questions ||
      questionData.questions.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    const currentStatus = questionData.questions[0].isFavourite;

    // Toggle the isFavourite status
    const result = await questionsCollection.updateOne(
      {'questions.id': id, 'questions.topicID': topicId},
      {$set: {'questions.$.isFavourite': !currentStatus}},
    );

    if (result.modifiedCount === 0) {
      return res.status(500).json({
        success: false,
        message: 'Failed to update favourite status',
      });
    }

    return res.status(200).json({
      success: true,
      message: !currentStatus
        ? 'Added to favourites successfully'
        : 'Removed from favourites successfully',
      newStatus: !currentStatus,
    });
  } catch (error) {
    console.error('Error updating favourite status:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while updating favourite status.',
    });
  }
};

export default updateFavouriteHandler;
