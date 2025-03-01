import React, { useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import "./pdf.css";

export default function PdfDownload({ userData }) {
  const iframeRef = useRef(null);
  const imgUrl =
    "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg";

  // Sample faculty data
  const facultyData = {
    name: userData.name,
    yearofjoin: userData.yearofjoin,
    department: userData.deptID,
    research: userData.research,
    publications: 20,
    email: userData.email,
    phoneno: userData.phoneno,
    gender: userData.gender,
    dob: userData.dob,
    category: userData.category,
    education: userData.education,
    designation: userData.designation,
    yearofjoin: userData.yearofjoin,
    deptID: userData.deptID,
  };

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title for the document
    // doc.addImage(imgUrl, "jpg", 20, 20, 50, 50);
    doc.setFont("arial", "bold");
    doc.setFontSize(20);
    doc.text("Self Appraisal Form", 20, 20);

    // Add faculty data
    doc.setFont("times new roman", "normal");
    doc.setFontSize(12);

    let y1Position = 20;
    let y2Position = 130;
    doc.text(`Name: ${facultyData.name}`, 20, 40);
    doc.text(`Email: ${facultyData.email}`, 20, 50);
    doc.text(`Phone Number: ${facultyData.phoneno}`, 20, 60);
    doc.text(`Gender: ${facultyData.gender}`, 20, 70);
    doc.text(`Date Of Birth: ${facultyData.dob}`, 20, 80);
    doc.text(`Category: ${facultyData.category}`, 20, 90);
    doc.text(`Education: ${facultyData.education}`, 20, 100);
    doc.text(`Designation: ${facultyData.designation}`, 20, 110);
    doc.text(`Year of Joining: ${facultyData.yearofjoin}`, 20, 120);
    doc.text(`Department ID: ${facultyData.deptID}`, 20, 130);

    let y3Position = 40; // Start position
    doc.setFont("ariel", "bold");
    doc.text("Research:", 20, 145);
    y3Position += 115; // Move down for research content
    doc.setFont("ariel", "normal");

    if (userData.research && Array.isArray(userData.research)) {
      // If research is an array, join with line breaks
      userData.research.forEach((line) => {
        doc.text(line, 25, y3Position);
        y3Position += 5; // Move down after each line
      });
    } else {
      // If research is a single string
      doc.text(userData.research || "N/A", 25, y3Position);
      y3Position += 5;
    }

    let y4Position = 210; // Start position
    doc.setFont("ariel", "bold");
    doc.text("Projects Led:", 20, 181);
    y3Position += 15; // Move down for research content
    doc.setFont("ariel", "normal");

    if (userData.projects && Array.isArray(userData.projects)) {
      // If research is an array, join with line breaks
      userData.projects.forEach((line) => {
        doc.text(line, 25, y3Position);
        y3Position += 5; // Move down after each line
      });
    } else {
      // If research is a single string
      doc.text(userData.projects || "N/A", 25, y3Position);
      y3Position += 5;
    }

    doc.line(15, y4Position + 5, 180, y4Position + 5);
    doc.line(15, y1Position + 5, 180, y1Position + 5);
    doc.line(15, y2Position + 5, 180, y2Position + 5);

    // Convert the PDF to a Blob object to display
    const pdfBlob = doc.output("blob");

    // Create a URL for the Blob and set it as the source of the iframe
    const pdfUrl = URL.createObjectURL(pdfBlob);
    iframeRef.current.src = pdfUrl;
  };
  const downloadPdf = () => {
    const doc = new jsPDF();

    // Title for the document
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Self-Appraisal Form", 20, 20);

    // Add faculty data
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Name: ${facultyData.name}`, 20, 40);
    doc.text(`Email: ${facultyData.email}`, 20, 50);
    doc.text(`Phone Number: ${facultyData.phoneno}`, 20, 60);
    doc.text(`Gender: ${facultyData.gender}`, 20, 70);
    doc.text(`Date Of Birth: ${facultyData.dob}`, 20, 80);
    doc.text(`Category: ${facultyData.category}`, 20, 90);
    doc.text(`Education: ${facultyData.education}`, 20, 100);
    doc.text(`Designation: ${facultyData.designation}`, 20, 110);
    doc.text(`Year of Joining: ${facultyData.yearofjoin}`, 20, 120);
    doc.text(`Department ID: ${facultyData.deptID}`, 20, 130);
  };
  // Generate and display the PDF when the component mounts (on page load)
  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <div className="pdf">
      <h1>Self-Appraisal Form</h1>
      <p>Click below to generate the PDF report for the faculty:</p>
      <button onClick={downloadPdf}>Generate PDF</button>
      {/* Embed an iframe to display the PDF */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Generated PDF"
      />
      <br />
    </div>
  );
}
