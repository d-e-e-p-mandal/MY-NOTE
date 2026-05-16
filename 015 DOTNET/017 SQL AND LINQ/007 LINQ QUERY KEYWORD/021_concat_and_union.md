# Concat and Union:

##### Data:
```cs
int[] nums1 = { 1, 2, 3 };
int[] nums2 = { 3, 4, 5 };
```
--------------------------

## Concat:
- Union All in SQL.
- Repeat Entity.

**Query Syntax:**
```cs
var result =
    (from n in nums1
     select n)
    .Concat(
        from n in nums2
        select n
    );
```

**Method Syntax:**
```cs
var result =
    nums1.Concat(nums2);
```



-----------------------------------------

## Union:
- Union in SQL.
- Do not repeat duplicate entity(row).

**Query Syntax:**
```cs
var result =
    (from n in nums1
     select n)
    .Union(
        from n in nums2
        select n
    );
```

**Method Syntax:**
```cs
var result =
    nums1.Union(nums2);
```


------------------------------------
## Function In Select Before Projection (Excute In database): Can use and Can Not:

#### Can Use:
- ToString()
- Substring()

#### Can Not Use:
- ToString("dd/MM/yyyy") // (All Specified format)
- UserDefined Function
- Trim()
- PadLeft()