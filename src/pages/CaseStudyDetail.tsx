
import { useParams, Navigate } from 'react-router-dom';
import CaseStudyDetail from '../components/CaseStudyDetail';
import { getCaseStudyById } from '../data/caseStudies';

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  
  const caseStudy = caseStudyId ? getCaseStudyById(caseStudyId) : undefined;
  
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }
  
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default CaseStudyDetailPage;
