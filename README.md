## Run the Script
```bash
# Enter the example file
cd ./example

# Start the Application with Nodemon
npm run test
```


## Results

### With Index
| Data Count  | Operation Name | Response Time |
| ------------- | ------------- | ------------- |
| 100,000  | find_with_index_with_lean_and_limit | 44.626ms |
| 100,000  | find_with_index_with_lean_and_select_and_limit | 45.575ms |
| 100,000  | find_with_index_with_lean_and_query_and_limit | 85.57ms |
| 100,000  | find_with_index_with_lean_and_query_and_select_and_limit  | 86.286ms |
| 100,000  | find_with_index_with_lean_and_query_and_select | 20.301s |
| 100,000  | find_with_index_with_lean_and_query | 20.317s |
| 100,000  | find_with_index_with_lean_and_select | 30.566s |
| 100,000  | find_with_index_with_lean | 32.585s |
| 100,000  | find_with_index | 36.229s |
| ---------------- |
| 50,000  | find_with_index_with_lean_and_limit | 30.712ms |
| 50,000  | find_with_index_with_lean_and_select_and_limit | 31.636ms |
| 50,000  | find_with_index_with_lean_and_query_and_select_and_limit | 55.541ms |
| 50,000  | find_with_index_with_lean_and_query_and_limit | 75.881ms |
| 50,000  | find_with_index_with_lean_and_query_and_select | 9.971s |
| 50,000  | find_with_index_with_lean_and_query | 10.055s |
| 50,000  | find_with_index_with_lean_and_select | 15.130s |
| 50,000  | find_with_index_with_lean | 15.628s |
| 50,000  | find_with_index | 17.284s |
| ---------------- |
| 10,000  | find_with_index_with_lean_and_limit | 50.876ms |
| 10,000  | find_with_index_with_lean_and_select_and_limit | 52.203ms |
| 10,000  | find_with_index_with_lean_and_query_and_limit | 97.786ms |
| 10,000  | find_with_index_with_lean_and_query_and_select_and_limit | 526.147ms |
| 10,000  | find_with_index_with_lean_and_query | 2.357s |
| 10,000  | find_with_index_with_lean_and_query_and_select | 2.679s |
| 10,000  | find_with_index_with_lean_and_select | 3.635s |
| 10,000  | find_with_index_with_lean | 3.748s |
| 10,000  | find_with_index | 4.163s |

---

### Without Index
| Data Count  | Operation Name | Response Time |
| ------------- | ------------- | ------------- |
| 100,000  | find_without_index_with_lean_and_select_and_limit | 10.075s |
| 100,000  | find_without_index_with_lean_and_limit | 10.112s |
| 100,000  | find_without_index_with_lean_and_query_and_limit | 10.137s |
| 100,000  | find_without_index_with_lean_and_query_and_select_and_limit | 10.144s |
| 100,000  | find_without_index_with_lean_and_query_and_select | 39.438s |
| 100,000  | find_without_index_with_lean_and_query | 39.773s |
| 100,000  | find_without_index_with_lean_and_select | 49.898s |
| 100,000  | find_without_index | 56.299s |
| 100,000  | find_without_index_with_lean | 52.842s |
| ---------------- |
| 50,000  | find_without_index_with_lean_and_select_and_limit | 4.979s |
| 50,000  | find_without_index_with_lean_and_limit | 5.032s |
| 50,000  | find_without_index_with_lean_and_query_and_limit | 5.052s |
| 50,000  | find_without_index_with_lean_and_query_and_select_and_limit | 5.061s |
| 50,000  | find_without_index_with_lean_and_query_and_select | 19.986s |
| 50,000  | find_without_index_with_lean_and_query | 20.068s |
| 50,000  | find_without_index_with_lean_and_select | 24.402s |
| 50,000  | find_without_index | 27.233s |
| 50,000  | find_without_index_with_lean | 27.324s |
| ---------------- |
| 10,000  | find_without_index_with_lean_and_select_and_limit | 94.901ms |
| 10,000  | find_without_index_with_lean_and_limit | 130.425ms |
| 10,000  | find_without_index_with_lean_and_query_and_limit | 208.939ms |
| 10,000  | find_without_index_with_lean_and_query_and_select_and_limit | 600.801ms |
| 10,000  | find_without_index_with_lean_and_query_and_select | 2.133s |
| 10,000  | find_without_index_with_lean_and_query | 2.273s |
| 10,000  | find_without_index_with_lean_and_select | 2.989s |
| 10,000  | find_without_index | 3.655s |
| 10,000  | find_without_index_with_lean | 3.949s |



## LICENSE
```txt
MIT License

Copyright (c) 2022 Void Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
