
## Results


### Results for 100,000 datas.
```
------------------------ WITHOUT INDEX ------------------------
find_without_index_with_lean_and_select_and_limit: 10.075s
find_without_index_with_lean_and_limit: 10.112s
find_without_index_with_lean_and_query_and_limit: 10.137s
find_without_index_with_lean_and_query_and_select_and_limit: 10.144s
find_without_index_with_lean_and_query_and_select: 39.438s
find_without_index_with_lean_and_query: 39.773s
find_without_index_with_lean_and_select: 49.898s
find_without_index_with_lean: 52.842s
find_without_index: 56.299s
------------------------ WITH INDEX ------------------------
find_with_index_with_lean_and_limit: 44.626ms
find_with_index_with_lean_and_select_and_limit: 45.575ms
find_with_index_with_lean_and_query_and_limit: 85.57ms
find_with_index_with_lean_and_query_and_select_and_limit: 86.286ms
find_with_index_with_lean_and_query_and_select: 20.301s
find_with_index_with_lean_and_query: 20.317s
find_with_index_with_lean_and_select: 30.566s
find_with_index_with_lean: 32.585s
find_with_index: 36.229s
```

### Results for 50,000 datas.
```
------------------------ WITHOUT INDEX ------------------------
find_without_index_with_lean_and_select_and_limit: 4.979s
find_without_index_with_lean_and_limit: 5.032s
find_without_index_with_lean_and_query_and_limit: 5.052s
find_without_index_with_lean_and_query_and_select_and_limit: 5.061s
find_without_index_with_lean_and_query_and_select: 19.986s
find_without_index_with_lean_and_query: 20.068s
find_without_index_with_lean_and_select: 24.402s
find_without_index: 27.233s
find_without_index_with_lean: 27.324s
------------------------ WITH INDEX ------------------------
find_with_index_with_lean_and_limit: 30.712ms
find_with_index_with_lean_and_select_and_limit: 31.636ms
find_with_index_with_lean_and_query_and_select_and_limit: 55.541ms
find_with_index_with_lean_and_query_and_limit: 75.881ms
find_with_index_with_lean_and_query_and_select: 9.971s
find_with_index_with_lean_and_query: 10.055s
find_with_index_with_lean_and_select: 15.130s
find_with_index_with_lean: 15.628s
find_with_index: 17.284s
```

### Results for 10,000 datas.
```
------------------------ WITHOUT INDEX ------------------------
find_without_index_with_lean_and_select_and_limit: 94.901ms
find_without_index_with_lean_and_limit: 130.425ms
find_without_index_with_lean_and_query_and_limit: 208.939ms
find_without_index_with_lean_and_query_and_select_and_limit: 600.801ms
find_without_index_with_lean_and_query_and_select: 2.133s
find_without_index_with_lean_and_query: 2.273s
find_without_index_with_lean_and_select: 2.989s
find_without_index: 3.655s
find_without_index_with_lean: 3.949s
------------------------ WITH INDEX ------------------------
find_with_index_with_lean_and_limit: 50.876ms
find_with_index_with_lean_and_select_and_limit: 52.203ms
find_with_index_with_lean_and_query_and_limit: 97.786ms
find_with_index_with_lean_and_query_and_select_and_limit: 526.147ms
find_with_index_with_lean_and_query: 2.357s
find_with_index_with_lean_and_query_and_select: 2.679s
find_with_index_with_lean_and_select: 3.635s
find_with_index_with_lean: 3.748s
find_with_index: 4.163s
```