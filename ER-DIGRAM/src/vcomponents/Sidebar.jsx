import React, { useState } from 'react';
import './CSS/Sidebar.css';

function Sidebar() {
  const [tables, setTables] = useState([]);
  const [tableCounter, setTableCounter] = useState(1);
  const [editingTable, setEditingTable] = useState(null);
  const [showActions, setShowActions] = useState(null);
  const [expandedTable, setExpandedTable] = useState(null); // State to track the expanded table

  const addTable = () => {
    const newTable = {
      name: `table_${tableCounter}`,
      columns: [
        { name: 'id', type: 'bigint' },
      ],
      comments: [],
    };
    setTables([...tables, newTable]);
    setTableCounter(tableCounter + 1);
  };

  const handleRename = (index, newName) => {
    const updatedTables = [...tables];
    updatedTables[index].name = newName;
    setTables(updatedTables);
    setEditingTable(null);
  };

  const addColumn = (index) => {
    const updatedTables = [...tables];
    updatedTables[index].columns.push({ name: `column_${updatedTables[index].columns.length + 1}`, type: 'bigint' });
    setTables(updatedTables);
  };

  const updateColumn = (tableIndex, colIndex, field, value) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns[colIndex][field] = value;
    setTables(updatedTables);
  };

  const deleteColumn = (tableIndex, colIndex) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns.splice(colIndex, 1);
    setTables(updatedTables);
  };

  const duplicateTable = (index) => {
    const tableToDuplicate = tables[index];
    const newTable = {
      ...tableToDuplicate,
      name: `${tableToDuplicate.name}_duplicate_${tableCounter}`,
      columns: tableToDuplicate.columns.map(column => ({ ...column })),
    };
    setTables([...tables, newTable]);
    setTableCounter(tableCounter + 1);
  };

  const toggleExpand = (index) => {
    // Toggle the expanded state of the table
    setExpandedTable(expandedTable === index ? null : index);
  };
  const addComment = (index) => {
    const comment = prompt("Enter your comment:"); // Prompt the user to enter a comment
    if (comment) {
      const updatedTables = [...tables];
      updatedTables[index].comments = [comment]; // Only keep the most recent comment
      setTables(updatedTables);
    }
  };
  return (
    <div className="sidebar">
      <h2>Tables</h2>
      <button className="new-table-btn" onClick={addTable}>
        + New table
      </button>
      <div className="table-list">
        {tables.map((table, index) => (
          <div key={index} className="table-item">
            <div className="table-header">
              {editingTable === index ? (
                <input
                  type="text"
                  defaultValue={table.name}
                  onBlur={(e) => handleRename(index, e.target.value)}
                  autoFocus
                  className="edit-input"
                />
              ) : (
                <span>{table.name}</span>
              )}

              <i className="fa-solid fa-pen edit-icon" onClick={() => setEditingTable(index)}></i>
              <div className="actions-icon" onClick={() => setShowActions(showActions === index ? null : index)}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
                {showActions === index && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => addColumn(index)}>
                      <i className="fa-solid fa-columns"></i> Add column
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-database"></i> Add index
                    </div>
                    <div className="dropdown-item" onClick={() => addComment(index)}>
                      <i className="fa-solid fa-comment"></i> Add comment
                    </div>
                    <div className="dropdown-item" onClick={() => duplicateTable(index)}>
                      <i className="fa-solid fa-copy"></i> Duplicate table
                    </div>
                    <div className="dropdown-item" onClick={() => {
                      setTables(tables.filter((_, i) => i !== index));
                      setShowActions(null);
                    }}>
                      <i className="fa-solid fa-trash"></i> Delete table
                    </div>
                  </div>
                )}
              </div>

              {/* Chevron icon to toggle expand/collapse */}
              <i
                className={`fa-solid ${expandedTable === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                onClick={() => toggleExpand(index)}
              ></i>
            </div>

            {/* Show table data if the table is expanded */}
            {expandedTable === index && (
              <>
                <div className="table-columns">
                  {table.columns.map((column, colIndex) => (
                    <div key={colIndex} className="table-column">
                      <input
                        type="text"
                        value={column.name}
                        onChange={(e) => updateColumn(index, colIndex, 'name', e.target.value)}
                        placeholder="Column Name"
                        className="column-name"
                      />
                      <input
                        type="text"
                        value={column.type}
                        onChange={(e) => updateColumn(index, colIndex, 'type', e.target.value)}
                        placeholder="Data Type"
                        className="column-type"
                      />
                      {column.name !== 'id' && (
                        <div className="column-options">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                          <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => deleteColumn(index, colIndex)}>
                              <i className="fa-solid fa-trash"></i> Delete Column
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="table-comments">
              {table.comments.map((comment, idx) => (
                <div key={idx} className="table-comment">
                  <i className="fa-solid fa-comment"></i> {comment}
                </div>
              ))}
            </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
