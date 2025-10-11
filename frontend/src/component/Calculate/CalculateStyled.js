import styled from "styled-components";

export const CalculateContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
  padding: 32px;
  overflow-y: auto;
`;

export const CalculateContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 32px;
    margin-bottom: 0;
    color: #333;
    font-weight: 600;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f1f3f4;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionButton = styled.button`
  padding: 12px 20px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &.add-person {
    background: #667eea;
  }

  &.add-item {
    background: #28a745;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 14px;
`;

export const TableHeader = styled.th`
  padding: 16px 12px;
  border: 1px solid #e1e5e9;
  text-align: center;
  background: #f8f9fa;
  font-weight: 600;
  color: #495057;
  position: relative;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #e1e5e9;
  background: white;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    padding: 4px 0;

    &:focus {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
    }

    &[type="number"] {
      text-align: right;
    }
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }
`;

export const TotalRow = styled.tr`
  background: #e9ecef;
  font-weight: bold;

  td {
    border-top: 2px solid #adb5bd;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8d7da;
    transform: scale(1.1);
  }
`;

export const PersonDeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 12px;
  padding: 2px;
  border-radius: 3px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8d7da;
    transform: scale(1.2);
  }
`;
