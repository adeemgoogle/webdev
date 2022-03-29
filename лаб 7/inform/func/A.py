def mm(a,b,c,d):
    if (a <= b and a <= c and a <= d):
        print(a)
    elif ( b <= a and b <= c and  b <= d):
        print(b)
    elif ( c <= a and c <= b and c <= d):
        print(c)
    else :
        print(d)

a = int(input())
b = int(input())
c = int(input())
d= int(input())

mm(a,b,c,d) 