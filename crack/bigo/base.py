import sys

def main(n):
    res = sum(n)
    print(res)

def sum(n):
    if (n <= 0):
        return 0;
    return(n + sum(n-1))

if __name__ == '__main__':
    n = int(sys.argv[1])
    main(n)
