import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "../index.css";
import { json } from "./json";
import { useState, useCallback } from 'react';
import axios from "axios";

const SURVEY_ID = 1;
const API_URL = "http://localhost:3007";

function SurveyComponent() {
    const [showSubmitAnother, setShowSubmitAnother] = useState(false);
    const [surveyModel, setSurveyModel] = useState(new Model(json));

    surveyModel.applyTheme(themeJson);
    const surveyComplete = useCallback((surveyModel) => {
    
        saveSurveyResults(
            `${API_URL}/${SURVEY_ID}`,
          surveyModel.data
        )
      }, []);
    
    surveyModel.onComplete.add(surveyComplete);

    const resetSurvey = () => {
        const newSurvey = new Model(json);
        newSurvey.applyTheme(themeJson);
        newSurvey.onComplete.add(surveyComplete);
        setSurveyModel(newSurvey);
        setShowSubmitAnother(false);
    };

    return (
    <div>
        <Survey model={surveyModel} />
        {showSubmitAnother && (
            <button onClick={resetSurvey}>Submit Another Response</button>
        )}
    </div>
    );
}

function saveSurveyResults(url, json) {

    axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })

    .then(response => {

        if (response.status === 200) {
            
            console.log("Survey results submitted successfully.");
        } else {
           
            console.error("Error submitting survey results: ", response.status, response.statusText);
        }
    })
    .catch(error => {

        console.error("Error submitting survey results: ", error);
    });
}

export default SurveyComponent;