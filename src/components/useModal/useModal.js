import { useState } from 'react';

// This component creates a custom React Hook.
const useModal = () => {
    // Sets up the the modal with a useState Hook so that our app knows
    // whether or not to display the modal.
    const [isShowing, setIsShowing] = useState(false);

    // This function toggles the modal to show or be hidden.
    function toggle() {
        setIsShowing(isShowing)
    }

    // Returns the isShowing variable and the toggle function so that the component
    // accessing it can use them.
    return {
        isShowing,
        toggle
    }
};

export default useModal;