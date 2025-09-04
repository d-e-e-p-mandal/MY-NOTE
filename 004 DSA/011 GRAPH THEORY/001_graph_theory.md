# Graph Theory Notes

## 1. Graph
```diff
A –– B
|   /|
|  / |
C –– D
```
A **graph** is a mathematical structure used to model pairwise relations between objects.  
It consists of:
- A set of **vertices (nodes)**.
- A set of **edges (connections)** that link pairs of vertices.

Formally, a graph `G` is defined as:  
**G = (V, E)**  
where:
- `V` = set of vertices (non-empty).
- `E` = set of edges.

---

## 2. Vertex (Node)
- A **vertex** is a fundamental unit of a graph, representing an object or entity.  
- Plural: **vertices**.  
- Example: In a social network graph, each person is a vertex.
- Vertices: `{A, B, C, D}`
---

## 3. Edge (Link)
- An **edge** is a connection between two vertices.  
- It represents the relationship or path between two vertices.  
- Example: In a road map, an edge represents a road connecting two cities.
- Edges: `{(A, B), (A, C), (B, C), (B, D), (C, D)}`
---

## 4. Adjacent Vertices
- Two vertices are **adjacent** if there is an edge connecting them.  
- Example: If edge `(A, B)` exists, then `A` and `B` are adjacent vertices.

---

## 5. Adjacent Edges
- Two edges are **adjacent** if they share a common vertex.  
- Example: If edges `(A, B)` and `(B, C)` exist, they are adjacent because both touch vertex `B`.

---

## 6. Directed Graph (Digraph)
- A **directed graph** is a graph where edges have a direction.  
- An edge from `A → B` means a one-way connection from `A` to `B`.  
- Order of vertices in an edge matters: `(A, B) ≠ (B, A)`.

---

## 7. Undirected Graph
- An **undirected graph** is a graph where edges have no direction.  
- An edge between `A` and `B` is the same as between `B` and `A`.  
- Order of vertices in an edge does not matter: `(A, B) = (B, A)`.

---

## 8. Self Loop
- A **self loop** is an edge that connects a vertex to itself.  
- Example: Edge `(A, A)`.

---

## 9. Multi Edges
- **Multi edges** (or parallel edges) are two or more edges connecting the same pair of vertices.  
- Example: Two different roads (edges) connecting the same cities (vertices).

---

## 10. Pseudograph
- A **pseudograph** is a graph that allows:
  - **Self loops**
  - **Multiple edges** between the same vertices.  

---

## 11. Multigraph
- A **multigraph** is a graph that allows **multiple edges** between the same pair of vertices.  
- **Self loops may or may not be allowed** depending on definition.

---

## 12. Simple Graph
- A **simple graph** is a graph that:
  - Does **not allow self loops**.
  - Does **not allow multiple edges**.
- Only one edge can exist between two distinct vertices.

---



# Degree of a Graph

## 1. Degree of a Vertex
The **degree** of a vertex is the number of edges incident (connected) to that vertex.

- **Undirected Graph:**
  - Degree of vertex `v` = Number of edges connected to `v`.
  - A **self loop** at a vertex contributes **2** to its degree (since it touches the vertex twice).
  - Notation: `deg(v)`.

- **Directed Graph:**
  - **In-degree (`deg⁻(v)`):** Number of edges coming **into** the vertex `v`.
  - **Out-degree (`deg⁺(v)`):** Number of edges going **out** from the vertex `v`.
  - Total degree of a vertex = `in-degree + out-degree`.

---

## 2. Handshaking Lemma
- In an **undirected graph**, the sum of the degrees of all vertices = **2 × number of edges**.
  - Formula:  
    \[
    \sum_{v \in V} deg(v) = 2|E|
    \]

- In a **directed graph**, the sum of in-degrees = sum of out-degrees = number of edges.  
  - Formula:  
    \[
    \sum_{v \in V} deg^-(v) = \sum_{v \in V} deg^+(v) = |E|
    \]

---

## 3. How to Calculate Degree

### Example 1: Undirected Graph
```diff
A –– B
|   /|
|  / |
C –– D
```

- deg(A) = 2  (edges: A–B, A–C)  
- deg(B) = 3  (edges: A–B, B–C, B–D)  
- deg(C) = 3  (edges: A–C, B–C, C–D)  
- deg(D) = 2  (edges: B–D, C–D)  

**Check with Handshaking Lemma:**  
Sum of degrees = 2 + 3 + 3 + 2 = 10 = 2 × 5 edges ✅

---

### Example 2: Directed Graph
```diff
A → B → C
↑       ↓
└───────D
```
- In-degree & Out-degree:  
  - A: in = 1 (D→A), out = 1 (A→B) → total = 2  
  - B: in = 1 (A→B), out = 1 (B→C) → total = 2  
  - C: in = 1 (B→C), out = 1 (C→D) → total = 2  
  - D: in = 1 (C→D), out = 1 (D→A) → total = 2  

**Check:**  
Sum of in-degrees = 4 = |E|  
Sum of out-degrees = 4 = |E| ✅

---

