import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchasePlanApplication from "./view/PurchasePlanApplication/index.jsx";
import LnquiryPurchase from "./view/LnquiryPurchase/index.jsx";
import InquiryResultApproval from "./view/InquiryResultApproval/index.jsx";
import EvaluationResultsApproval from "./view/EvaluationResultsApproval/index.jsx";
import MyApplication from "./view/MyApplication/index.jsx";
import './App.css'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<PurchasePlanApplication />} /> 
            <Route path="/LnquiryPurchase" element={<LnquiryPurchase />} /> 
            <Route path="/InquiryResultApproval" element={<InquiryResultApproval />} /> 
            <Route path="/EvaluationResultsApproval" element={<EvaluationResultsApproval />} /> 
            <Route path="/MyApplication" element={<MyApplication />} /> 

          </Routes>
      </Router>
    </>
  )
}

export default App
