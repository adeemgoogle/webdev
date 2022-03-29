def check(x):
	while x % 2 == 0:
		x //= 2
	return x == 1
if check(int(input())): print('YES')
else: print('NO')
	