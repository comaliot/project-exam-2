import React from 'react';

function Paragraph(paragraph) {
  return (
    <p className="text-center md:text-left text-lg mt-4 text-gray-500">
      {paragraph.content}
    </p>
  );
}

export default Paragraph;
