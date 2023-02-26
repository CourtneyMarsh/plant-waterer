import React from "react";
import './add-plant.css';

export const AddPlant = () => {
    return (
        <div>
            <form>
                <label for="plantname">Plant name:</label>
                <input type="text" id="plantname" name="plantname" />
            </form>
        </div>
    );
};