import React from "react";
const Footer = () => {
    return (
        <>
        <footer className="footer py-4">
    <div className="container">
        <div className="row">
            
            {/* ✅ Correction 1: Changed col-lg-12 to col-lg-4 
               to display all three items side-by-side on large screens. */}
            <div className="col-lg-4 col-md-4 col-12 text-center mb-3">
                <strong>Find us</strong>
                <p className="text-muted">123 Main St, Anytown</p>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12 text-center mb-3">
                <strong>Call us</strong>
                <p className="text-muted">+1 (555) 123-4567</p>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12 text-center mb-3">
                <strong>Mail us</strong>
                <p className="text-muted">contact@example.com</p>
            </div>
            
        </div>
        {/* Added a copyright row for completeness */}
        <div className="row mt-3 border-top pt-3">
            <div className="col-12 text-center">
                <small>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</small>
            </div>
        </div>
    </div>
</footer>
        </>
    );
}

export default Footer;