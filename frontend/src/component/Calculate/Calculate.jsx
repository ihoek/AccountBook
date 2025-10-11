import { useState } from "react";
import {
  CalculateContainer,
  CalculateContent,
  HeaderSection,
  ButtonGroup,
  ActionButton,
  TableContainer,
  StyledTable,
  TableHeader,
  TableCell,
  TableRow,
  TotalRow,
  DeleteButton,
  PersonDeleteButton,
} from "./CalculateStyled";
import { PlusIcon, TrashIcon } from "../../Utils/svgfiles";

const Calculate = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      content: "점심",
      totalAmount: 25500,
      personalAmounts: { 이정민: 12750, 김희수: 12750 },
    },
    {
      id: 2,
      content: "오티티",
      totalAmount: 23000,
      personalAmounts: { 이정민: 11500, 김희수: 11500 },
    },
    {
      id: 3,
      content: "저녁",
      totalAmount: 33000,
      personalAmounts: { 이정민: 16500, 김희수: 16500 },
    },
    {
      id: 4,
      content: "알라딘",
      totalAmount: 100,
      personalAmounts: { 이정민: 0, 김희수: 100 },
    },
  ]);

  const [people, setPeople] = useState(["이정민", "김희수"]);
  const [nextItemId, setNextItemId] = useState(5);
  const [nextPersonId, setNextPersonId] = useState(1);
  const [editingPerson, setEditingPerson] = useState(null);
  const [tempPersonName, setTempPersonName] = useState("");

  // 항목 추가
  const addItem = () => {
    const newItem = {
      id: nextItemId,
      content: "",
      totalAmount: 0,
      personalAmounts: people.reduce(
        (acc, person) => ({ ...acc, [person]: 0 }),
        {}
      ),
    };
    setItems([...items, newItem]);
    setNextItemId(nextItemId + 1);
  };

  // 항목 삭제
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // 항목 내용 업데이트
  const updateItemContent = (id, content) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, content } : item))
    );
  };

  // 항목 총액 업데이트
  const updateItemTotal = (id, totalAmount) => {
    const amount = parseInt(totalAmount) || 0;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, totalAmount: amount } : item
      )
    );
  };

  // 개인별 금액 업데이트
  const updatePersonalAmount = (itemId, person, amount) => {
    const personalAmount = parseInt(amount) || 0;
    setItems(
      items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              personalAmounts: {
                ...item.personalAmounts,
                [person]: personalAmount,
              },
            }
          : item
      )
    );
  };

  // 인원 추가
  const addPerson = () => {
    const newPersonName = `사람${nextPersonId}`;
    setPeople([...people, newPersonName]);
    setNextPersonId(nextPersonId + 1);
    // 기존 항목들에 새 인원 추가
    setItems(
      items.map((item) => ({
        ...item,
        personalAmounts: { ...item.personalAmounts, [newPersonName]: 0 },
      }))
    );
  };

  // 인원 삭제
  const removePerson = (personName) => {
    if (people.length <= 1) return; // 최소 1명은 유지
    setPeople(people.filter((p) => p !== personName));
    setItems(
      items.map((item) => {
        const newPersonalAmounts = { ...item.personalAmounts };
        delete newPersonalAmounts[personName];
        return { ...item, personalAmounts: newPersonalAmounts };
      })
    );
  };

  // 총계 계산
  const totalAmount = items.reduce((sum, item) => sum + item.totalAmount, 0);
  const personalTotals = people.reduce((acc, person) => {
    acc[person] = items.reduce(
      (sum, item) => sum + (item.personalAmounts[person] || 0),
      0
    );
    return acc;
  }, {});
  const grandTotal = items.reduce((sum, item) => {
    const itemTotal = Object.values(item.personalAmounts).reduce(
      (itemSum, amount) => itemSum + amount,
      0
    );
    return sum + itemTotal;
  }, 0);

  return (
    <CalculateContainer>
      <CalculateContent>
        <HeaderSection>
          <h1>🧮 정산</h1>
          <ButtonGroup>
            <ActionButton className="add-person" onClick={addPerson}>
              <PlusIcon />
              인원 추가
            </ActionButton>
            <ActionButton className="add-item" onClick={addItem}>
              <PlusIcon />
              항목 추가
            </ActionButton>
          </ButtonGroup>
        </HeaderSection>

        <TableContainer>
          <StyledTable>
            <thead>
              <TableRow>
                <TableHeader>No</TableHeader>
                <TableHeader>내용</TableHeader>
                <TableHeader>금액</TableHeader>
                {people.map((person) => (
                  <TableHeader key={person}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <input
                        type="text"
                        value={
                          editingPerson === person ? tempPersonName : person
                        }
                        onFocus={() => {
                          setEditingPerson(person);
                          setTempPersonName(person);
                        }}
                        onChange={(e) => {
                          setTempPersonName(e.target.value);
                        }}
                        style={{
                          width: "80px",
                          border: "none",
                          outline: "none",
                          background: "transparent",
                          fontSize: "14px",
                          fontWeight: "bold",
                          textAlign: "center",
                          padding: "4px",
                        }}
                      />
                      {people.length > 1 && (
                        <PersonDeleteButton
                          onClick={() => removePerson(person)}
                        >
                          <TrashIcon />
                        </PersonDeleteButton>
                      )}
                    </div>
                  </TableHeader>
                ))}
                <TableHeader>총액</TableHeader>
                <TableHeader>삭제</TableHeader>
              </TableRow>
            </thead>

            {/* 항목 행 */}
            <tbody>
              {items.map((item, index) => {
                const itemTotal = Object.values(item.personalAmounts).reduce(
                  (sum, amount) => sum + amount,
                  0
                );
                return (
                  <TableRow key={item.id}>
                    {/* 번호 */}
                    <TableCell style={{ textAlign: "center" }}>
                      {index + 1}
                    </TableCell>
                    {/* 내용 */}
                    <TableCell>
                      <input
                        type="text"
                        value={item.content}
                        onChange={(e) =>
                          updateItemContent(item.id, e.target.value)
                        }
                        placeholder="내용 입력"
                      />
                    </TableCell>
                    {/* 금액 */}
                    <TableCell>
                      <input
                        type="number"
                        value={item.totalAmount || ""}
                        onChange={(e) =>
                          updateItemTotal(item.id, e.target.value)
                        }
                        placeholder="0"
                      />
                    </TableCell>
                    {/* 개인별 금액 */}
                    {people.map((person) => (
                      <TableCell key={person}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          }}
                        >
                          <input
                            type="number"
                            value={item.personalAmounts[person] || ""}
                            onChange={(e) =>
                              updatePersonalAmount(
                                item.id,
                                person,
                                e.target.value
                              )
                            }
                            placeholder="0"
                          />
                        </div>
                      </TableCell>
                    ))}
                    {/* 총액 */}
                    <TableCell
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      {itemTotal.toLocaleString()}
                    </TableCell>
                    {/* 삭제 */}
                    <TableCell style={{ textAlign: "center" }}>
                      <DeleteButton onClick={() => removeItem(item.id)}>
                        <TrashIcon />
                      </DeleteButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* 총계 행 */}
              <TotalRow>
                <TableCell style={{ textAlign: "center" }}>총액</TableCell>
                <TableCell></TableCell>
                <TableCell style={{ textAlign: "right" }}>
                  {totalAmount.toLocaleString()}
                </TableCell>
                {/* 개인별 금액 */}
                {people.map((person) => (
                  <TableCell key={person} style={{ textAlign: "right" }}>
                    {personalTotals[person].toLocaleString()}
                  </TableCell>
                ))}
                {/* 총액 */}
                <TableCell style={{ textAlign: "right" }}>
                  {grandTotal.toLocaleString()}
                </TableCell>
                <TableCell></TableCell>
              </TotalRow>
            </tbody>
          </StyledTable>
        </TableContainer>
      </CalculateContent>
    </CalculateContainer>
  );
};

export default Calculate;
