'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface GetQuoteFormProps {
  onClose: () => void; // Callback to close the form
}

const GetQuoteForm: React.FC<GetQuoteFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [finalConfirmOpen, setFinalConfirmOpen] = useState(false);

  const validate = () => {
    return {
      name:
        /^[A-Za-z\s]+$/.test(formData.name) && formData.name.length > 1
          ? ''
          : 'Name must contain only letters',
      email: /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Enter a valid email',
      phone:
        formData.phone.replace(/\D/g, '').length >= 10
          ? ''
          : 'Enter a valid phone number',
      message:
        formData.message === '' || formData.message.length >= 5
          ? ''
          : 'Message must be at least 5 characters',
    };
  };

  const errors = validate();
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.message;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setConfirmOpen(true);
    }
  };

  // Updated handleConfirm to submit to Formcarry
  const handleConfirm = async () => {
    setConfirmOpen(false);
    setSuccessOpen(true);

    // Prepare form data for Formcarry
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);

    try {
      const res = await fetch('https://formcarry.com/s/llHLuNC3mr2', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (res.ok) {
        // Show final confirmation after a short delay
        setTimeout(() => {
          setSuccessOpen(false);
          setFinalConfirmOpen(true);
        }, 2000);
      } else {
        setSuccessOpen(false);
        alert('❌ Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessOpen(false);
      alert('❌ Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      {/* Main Form Modal */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Get a Quote</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={() => setTouched({ ...touched, name: true })}
                className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onBlur={() => setTouched({ ...touched, email: true })}
                className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputStyle={{
                  width: '100%',
                  border: '1px solid #facc15',
                  borderRadius: '0.375rem',
                  color: 'black',
                }}
                buttonStyle={{ border: '1px solid #facc15', backgroundColor: 'white' }}
                dropdownStyle={{ color: 'black' }}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message (optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={() => setTouched({ ...touched, message: true })}
                className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows={3}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                disabled={!isValid}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-yellow-400 text-black font-bold rounded disabled:opacity-50"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl text-center">
            <h3 className="text-lg font-bold mb-4 text-black">Confirm Submission</h3>
            <p className="mb-4 text-gray-700">
              Are you sure you want to submit this request?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-yellow-400 text-black font-bold rounded"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Processing Toast */}
      {successOpen && (
        <div className="fixed bottom-6 right-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow-lg z-50">
          ✅ Your request is being processed...
        </div>
      )}

      {/* Final Confirmation */}
      {finalConfirmOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl text-center">
            <h3 className="text-xl font-bold text-black mb-4">🎉 Submission Successful!</h3>
            <p className="text-gray-700 mb-6">Thank you! We’ll contact you shortly.</p>
            <button
              onClick={() => {
                setFinalConfirmOpen(false);
                onClose(); // Close form after success
              }}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GetQuoteForm;
