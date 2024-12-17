// CreateLead.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVert } from '@mui/icons-material';
import './CreateLead.css';

// TODO: Backend Integration Required:
// 1. API Endpoints needed:
//    - POST /api/leads - create new lead
//    - GET /api/lead-sources - fetch source options
//    - GET /api/users - fetch assignable users
// 2. Form validation
// 3. File upload handling
// 4. Error handling
// 5. Success notifications

const CreateLead = () => {
  const navigate = useNavigate();

    // TODO: Add state management for:
    // - Form data
    // - File uploads
    // - Validation errors
    // - API responses
    // - Loading states

  return (
    // TODO: Implement:
        // - Form validation
        // - File upload UI
        // - Loading states
        // - Error messages
        // - Success handling
    <div className="create-lead-page">
      <div className="create-lead-header">
        <div className="breadcrumb">
          <span className="leads-link" onClick={() => navigate('/dashboard/leads')}>Leads</span>
          <span className="separator">›</span>
          <span>create</span>
        </div>
        <div className="header-actions">
          <button className="save-btn">Save</button>
          <button className="cancel-btn" onClick={() => navigate('/dashboard/leads')}>Cancel</button>
          <button className="more-btn"><MoreVert /></button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-main">
          <h3>Overview</h3>
          <div className="form-section">
            <div className="form-group full-width">
              <label>Name *</label>
              <div className="name-group">
                <select className="title-select">
                  <option value="">-</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                </select>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="form-group">
              <label>Account Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <div className="phone-group">
                <select>
                  <option value="Mobile">Mobile</option>
                  <option value="Office">Office</option>
                  <option value="Home">Home</option>
                  <option value="Fax">Fax</option>
                  <option value="Other">Other</option>
                </select>
                <div className="phone-input">
                  <span className="country-code">+1</span>
                  <input type="text" placeholder="000-000-0000" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Title</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input type="text" />
            </div>
          </div>

          <div className="address-section">
            <h4>Address</h4>
            <input type="text" placeholder="Street" />
            <div className="address-grid">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Postal Code" />
            </div>
            <input type="text" placeholder="Country" />
          </div>

          <div className="details-section">
            <h4>Details</h4>
            <div className="details-grid">
              <div className="form-group">
                <label>Status</label>
                <select defaultValue="New">
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="In Process">In Process</option>
                  <option value="Converted">Converted</option>
                  <option value="Recycled">Recycled</option>
                  <option value="Dead">Dead</option>
                </select>
              </div>

              <div className="form-group">
                <label>Source</label>
                <select>
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                  <option value="Existing Customer">Existing Customer</option>
                  <option value="Partner">Partner</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Web Site">Web Site</option>
                  <option value="Campaign">Campaign</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Opportunity Amount</label>
                <div className="amount-input">
                  <input type="text" />
                  <span className="currency">USD</span>
                </div>
              </div>

              <div className="form-group">
                <label>Campaign</label>
                <select>
                  <option value="">Select</option>
                </select>
              </div>

              <div className="form-group">
                <label>Industry</label>
                <select>
                  <option value="Advertising">Advertising</option>
                  <option value="Aerospace">Aerospace</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Apparel & Accessories">Apparel & Accessories</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Banking">Banking</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Building Materials & Equipment">Building Materials & Equipment</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Computer">Computer</option>
                  <option value="Construction">Construction</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Creative">Creative</option>
                  <option value="Culture">Culture</option>
                  <option value="Defense">Defense</option>
                  <option value="Education">Education</option>
                  <option value="Electric Power">Electric Power</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Energy">Energy</option>
                  <option value="Entertainment & Leisure">Entertainment & Leisure</option>
                  <option value="Finance">Finance</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Legal">Legal</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Mass Media">Mass Media</option>
                  <option value="Mining">Mining</option>
                  <option value="Music">Music</option>
                  <option value="Petroleum">Petroleum</option>
                  <option value="Publishing">Publishing</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Retail">Retail</option>
                  <option value="Service">Service</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Software">Software</option>
                  <option value="Sports">Sports</option>
                  <option value="Support">Support</option>
                  <option value="Technology">Technology</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Television">Television</option>
                  <option value="Testing, Inspection & Certification">Testing, Inspection & Certification</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Travel">Travel</option>
                  <option value="Venture Capital">Venture Capital</option>
                  <option value="Water">Water</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea rows="4"></textarea>
            </div>
          </div>
        </div>

        <div className="form-sidebar">
          <div className="form-group">
            <label>Assigned User</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Teams</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLead;
