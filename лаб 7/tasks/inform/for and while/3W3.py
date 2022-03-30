def check(x):
	while x % 2 == 0: x //= 2
	return x == 1
n = int(input())
for i in range(1, n + 1):
	if check(i): print(i, end = ' ')