/**
 * Navigates to a section with smooth scrolling or with fullpage API
 * 
 * @param {string} sectionId - The ID of the section to navigate to
 * @param {React.RefObject} fullpageRef - Reference to fullpage component
 */
// src/utils/navigation.js
import { SECTION_INDEX_MAP } from './sectionMap';

export function navigateToSection(sectionId, fullpageRef) {
  const index = SECTION_INDEX_MAP[sectionId];
  if (index === undefined) return;

  if (fullpageRef?.current) {
    try {
      fullpageRef.current.moveTo(index + 1); // Fullpage API uses 1-based indexes
      window.history.pushState({}, '', `/#${sectionId}`);
    } catch (err) {
      console.error(`Fullpage navigation failed for ${sectionId}:`, err);
    }
  } else {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', `/#${sectionId}`);
  }
}
