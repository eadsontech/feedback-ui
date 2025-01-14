import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This feedback item 1',
            rating: 7
        },
        {
            id: 2,
            text: 'This item is called feedback item and it\'s coming from context',
            rating: 5
        },
        {
            id: 3,
            text: 'This item is from context',
            rating: 9
        },
    ]);


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add feedback

    const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
    
  }


//   delete feedback
    
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    
  }

//   update feedback item

const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id===id? {...item, ...updItem} : item))
    
}


//   set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
  }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;