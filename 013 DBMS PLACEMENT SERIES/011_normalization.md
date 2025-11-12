# Normalisation and Functional Dependency (FD)

---

## 1. Normalisation
- Normalisation is a step towards **Database Optimisation**.

---

## 2. Functional Dependency (FD)

### 2.1 Definition
- It's a relationship between the **primary key attribute** (usually) of the relation and other attributes of the relation.  
- Denoted as: **X → Y**  
  - Left side (X): **Determinant**  
  - Right side (Y): **Dependent**

---

### 2.2 Types of Functional Dependency

#### (a) Trivial FD
- A → B has **trivial functional dependency** if **B** is a subset of **A**.  
- Examples: `A → A`, `B → B` are also Trivial FDs.

#### (b) Non-Trivial FD
- A → B has **non-trivial functional dependency** if **B** is not a subset of **A**.  
- In other words, **A ∩ B = NULL**.

---

### 2.3 Rules of FD (Armstrong’s Axioms)

#### 1. Reflexive Rule
- If **A** is a set of attributes and **B** is a subset of **A**, then **A → B** holds.  
- If **A ⊇ B**, then **A → B**.

#### 2. Augmentation Rule
- If **B** can be determined from **A**, adding an attribute to both sides won’t change the dependency.  
- If **A → B** holds, then **AX → BX** holds too, where **X** is a set of attributes.

#### 3. Transitivity Rule
- If **A** determines **B**, and **B** determines **C**, then **A** determines **C**.  
- If **A → B** and **B → C**, then **A → C**.

---

## 3. Why Normalisation?

- To **avoid redundancy** in the database and prevent storing duplicate data.

---

## 4. What Happens If We Have Redundant Data?

- **Insertion**, **Deletion**, and **Updation anomalies** arise due to redundancy.

---

## 5. Anomalies

### Definition
- “Anomalies” mean **abnormalities** in a database caused by **data redundancy**.  
- There are **three types** of anomalies:

#### 1. Insertion Anomaly
- When certain data (attribute) **cannot be inserted** into the database without the presence of other data.

#### 2. Deletion Anomaly
- When deletion of data results in **unintended loss** of some other important data.

#### 3. Updation (or Modification) Anomaly
- When updating a single data value requires **multiple rows** to be updated.  
- This may lead to **data inconsistency** if updates are missed in some places.

> ⚠️ Due to these anomalies:
> - Database size increases.  
> - Performance becomes very slow.

✅ To fix these issues, we use a **database optimisation technique** called **Normalisation**.

---

## 6. What is Normalisation?

1. **Definition:**  
   Normalisation is used to **minimise redundancy** in relations and eliminate undesirable characteristics like **Insertion**, **Update**, and **Deletion anomalies**.

2. **Purpose:**  
   Divides composite attributes into **individual attributes** or splits a large table into **smaller related tables** using relationships.

3. **Goal:**  
   Each **normal form** helps reduce redundancy and improve data integrity.

---

## 7. Types of Normal Forms

### 1. First Normal Form (1NF)
- Every relation cell must have **atomic values**.  
- Relation must not contain **multi-valued attributes**.

**Code Title:** *Example — Conversion of Multi-valued Attribute Table into 1NF Table*

---

### 2. Second Normal Form (2NF)
- Relation must be in **1NF**.  
- There should not be any **partial dependency**.

**Rules:**
1. All **non-prime attributes** must be **fully dependent** on the **Primary Key (PK)**.  
2. A **non-prime attribute** cannot depend on **part of a composite PK**.

**Code Title:** *Example — Partial Dependency Removal for 2NF*

---

### 3. Third Normal Form (3NF)
- Relation must be in **2NF**.  
- There should be **no transitive dependency**.

**Rule:**
- A **non-prime attribute** should not depend on another **non-prime attribute**.

**Code Title:** *Example — Removing Transitive Dependency for 3NF*

---

### 4. Boyce–Codd Normal Form (BCNF)
- Relation must be in **3NF**.  
- For every FD: **A → B**, **A** must be a **super key**.

**Condition:**
- No prime attribute should be derived from any prime or non-prime attribute.

**Code Title:** *Example — Enforcing BCNF Condition (A Must Be Super Key)*

---

## 8. Advantages of Normalisation

1. Minimises **data redundancy**.  
2. Improves overall **database organisation**.  
3. Maintains **data consistency** across the database.

---

**Source:** CodeHelp Notes  