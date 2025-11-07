## What are the Tensors :

- **Tensors** are multi-dimensional arrays used to represent data in **machine learning** and **deep learning**.
- They are the building blocks in frameworks like **TensorFlow** and **PyTorch**.

---

### 🔹 Types of Tensors

| Type | Example | Description |
|------|----------|--------------|
| **0D (Scalar)** | `5` | A single number, no direction or axis. |
| **1D Tensor (Vector)** | `[1, 2, 3]` | A one-dimensional array of numbers — called a **vector**. |
| **2D Tensor (Matrix)** | `[[1, 2, 3], [4, 5, 6]]` | A two-dimensional array — a **collection of vectors** arranged in rows and columns. |
| **3D Tensor** | `[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]` | A collection of matrices (multi-dimensional array). |

---

### 🔹 In Short
A **tensor** is just a **generalized form of a vector or matrix** that can have any number of dimensions.




## What is an Axis?

- An **axis** is a direction or dimension in a tensor (or array).
- It helps describe **how data is arranged** inside the tensor.

---

### 🔹 Examples

#### ✅ 1D Tensor (Vector)
`[10, 20, 30]`

- Only **one axis** → axis 0  
- Length = 3 (three elements along axis 0)

#### ✅ 2D Tensor (Matrix)
[
[1, 2, 3],
[4, 5, 6]
]
- **Axis 0** → rows (2 rows)  
- **Axis 1** → columns (3 columns)

So the shape is **(2, 3)** meaning:
- 2 items along **axis 0**
- 3 items along **axis 1**

---

### 🔹 In short
An **axis** is the direction along which data is stored in a tensor.
More axes = higher-dimensional data.



## Tensor / Scalar

- A **scalar** is a single number — it has **no direction** and **no dimension**.
- In tensor terms, a scalar is a **0-dimensional (0D) tensor**.
- It represents a single value, such as temperature, mass, or speed.

---

### 🔹 Example
```python
5
```
	•	Rank: 0
	•	Shape: ()
	•	Axis: None (no axis)
-------------------------------------------------------------------


## Tensor / Matrices

-   A **tensor** is a multi-dimensional array of numbers.\
-   **Matrices** are 2D tensors, while **vectors** are 1D tensors.\
-   Tensors can represent data of any dimension (1D, 2D, 3D, etc.).

------------------------------------------------------------------------

## ND Tensor

-   **N-Dimensional (ND) Tensor** means a tensor with *N axes
    (dimensions)*.\
-   For example:
    -   1D → Vector\
    -   2D → Matrix\
    -   3D → Cube-like data\
    -   ND → Higher-dimensional data (images, videos, etc.)

------------------------------------------------------------------------

## Rank, Axes, and Shape

-   **Rank** → Number of dimensions (axes) in the tensor.\
-   **Axis** → A direction along which data is arranged.\
-   **Shape** → Number of elements along each axis.

**Example:**\
Tensor = `[[1, 2, 3], [4, 5, 6]]`\
- Rank = 2\
- Axes = 0 (rows), 1 (columns)\
- Shape = (2, 3)

------------------------------------------------------------------------

## Example of 1D Tensor

``` python
[1, 2, 3, 4]
```

-   Rank: 1\
-   Shape: (4,)\
-   Axis: 1 (single axis --- elements in a line)

------------------------------------------------------------------------

## Example of 2D Tensor

``` python
[
  [1, 2, 3],
  [4, 5, 6]
]
```

-   Rank: 2\
-   Shape: (2, 3)\
-   Axis 0 → rows, Axis 1 → columns

------------------------------------------------------------------------

## Example of 3D Tensor

``` python
[
  [
    [1, 2], 
    [3, 4]
  ],
  [
    [5, 6], 
    [7, 8]
  ]
]
```

-   Rank: 3\
-   Shape: (2, 2, 2)\
-   Common in mediacal data with time 

------------------------------------------------------------------------

## Example of 4D Tensor

``` python
[
  [
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ]
  ]
]
```

-   Rank: 4\
-   Shape: (1, 2, 2, 2)\
-   Used for batches of images (batch_size, height, width, channels)

------------------------------------------------------------------------

## Example of 5D Tensor

``` python
[
  [
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [5, 6],
        [7, 8]
      ]
    ]
  ]
]
```

-   Rank: 5\
-   Shape: (1, 1, 2, 2, 2)\
-   Used for video data (batch_size, frames, height, width, channels)

