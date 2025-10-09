import sys
input = sys.stdin.readline

N = input().rstrip() # ljes=njak
output =0 
i=0
croatia = ['c=', 'c-','d-', 'lj', 'nj', 's=', 'z=']

while i < len(N):
        if N[i:i+3] == 'dz=' :
            output+=1
            i+=3
        elif N[i:i+2] in croatia:
            output+=1
            i+=2
        else:
            output +=1
            i+=1

print(output)
