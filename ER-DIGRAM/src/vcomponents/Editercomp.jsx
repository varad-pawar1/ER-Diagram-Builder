import Sidebar from './Sidebar';
import WhiteSpace from './WhiteSpace';
import useSidebarData from '../hooks/useSidebarData';
import Navbar from '../pComponent/editorCompo/EditorCompo'

function Editercomp() {
  const {
    tables,
    setTables,
    tableCounter,
    setTableCounter,
    editingTable,
    setEditingTable,
    showActions,
    setShowActions,
    expandedTable,
    setExpandedTable,
    addTable,
    handleRename,
    addColumn,
    updateColumn,
    deleteColumn,
    duplicateTable,
    toggleExpand,
    addComment,
  } = useSidebarData();

  return (
    <div className="mainEditer">
      <Sidebar
        tables={tables}
        setTables={setTables}
        tableCounter={tableCounter}
        setTableCounter={setTableCounter}
        editingTable={editingTable}
        setEditingTable={setEditingTable}
        showActions={showActions}
        setShowActions={setShowActions}
        expandedTable={expandedTable}
        setExpandedTable={setExpandedTable}
        addTable={addTable}
        handleRename={handleRename}
        addColumn={addColumn}
        updateColumn={updateColumn}
        deleteColumn={deleteColumn}
        duplicateTable={duplicateTable}
        toggleExpand={toggleExpand}
        addComment={addComment}
      />
      <WhiteSpace tables={tables} />
    </div>
  );
}

export default Editercomp;
