import React from 'react';
import QuestionsPage from '@components/pages/QuestionsPage';
import '@public/styles.css';
import AnswersPage from "@components/pages/AnswersPage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function Application() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} exact={true} element={<QuestionsPage/>}/>
                <Route path={ '/:userId' } element={ <AnswersPage/> }/>
            </Routes>
        </Router>
    );
}


export default Application;
