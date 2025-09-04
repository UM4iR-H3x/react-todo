import React from 'react'

export default function footer() {
  const footerStyle={
  position: "relative",
  left: 0,
  bottom: 0,
  width: "100%",
  border: "2px solid black",
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#b3b3b3",
    // height: "10vh"
  }
  return (
    <div style={footerStyle}>
      All rights reserved &copy; Umair Anwari
    </div>
  )
}
