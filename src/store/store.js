import { combineReducers, createStore } from "redux";
import{ResumeReducer} from "../reducers/ResumeReducer"
import{SkillsReducer} from "../reducers/SkillsReducer"
import{PortfolioReducer} from "../reducers/PortfolioReducer"
import{ContactReducer} from "../reducers/ContactReducer"

const reducer = combineReducers({
    resume: ResumeReducer,
    skills: SkillsReducer,
    portfolio: PortfolioReducer,
    contact: ContactReducer
})



export const store = createStore(reducer)