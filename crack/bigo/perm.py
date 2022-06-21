import sys

def main(n):
    res = permute(n)
    print(res)

def permute(n):
    if len(n) <= 1:
        return [n]
    sol = []
    for i, char in enumerate(n):
        others = n[:i] + n[i + 1:]
        for perm in permute(others):
            sol.append(char + perm)
    return sol

if __name__ == '__main__':
    n = sys.argv[1]
    main(n)
