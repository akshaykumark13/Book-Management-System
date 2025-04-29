import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

const BookForm = ({ fetchBooks, editingBook, setEditingBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    published_date: '',
    isbn: '',
    available: true,
  });

  // Populate form when editing
  useEffect(() => {
    if (editingBook) setFormData(editingBook);
  }, [editingBook]);

  // Handle input change
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle submit
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editingBook) {
        console.log('Editing book:', editingBook.id); // ✅
        await api.put(`books/${editingBook.id}/`, formData);
        setEditingBook(null);
      } else {
        await api.post('books/', formData);
      }

      fetchBooks();
      setFormData({
        title: '',
        author: '',
        genre: '',
        published_date: '',
        isbn: '',
        available: true,
      });
    } catch (err) {
      console.error('Error saving book:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <h5>{editingBook ? 'Edit Book' : 'Add Book'}</h5>
      <div className="row">
        {['title', 'author', 'genre', 'published_date', 'isbn'].map((field) => (
          <div className="col-md-4 mb-2" key={field}>
            <input
              type={field === 'published_date' ? 'date' : 'text'}
              name={field}
              value={formData[field]}
              placeholder={field.replace('_', ' ').toUpperCase()}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <div className="col-md-2 mb-2 d-flex align-items-center">
          <label className="me-2">Available</label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {editingBook ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default BookForm;
