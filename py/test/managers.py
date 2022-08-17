from random import randint


class Employee:
    def __init__(self, id, managerId):
        self.id = id
        self.managerId = managerId

    def __str__(self):
        return f'{self.id}:{self.managerId}'

    def __repr__(self):
        return self.__str__()


def main():
    employees = []
    # number of employees
    n = 100
    # loop through and create employees, set managers
    for x in range(n + 1):
        manager = randint(0, x)
        if x == manager:
            manager = 0
        employees.append(Employee(x, manager))
    # sort to get managers in order (top managers first)
    employees.sort(key=lambda x: x.managerId)
    # to hash employees to managers
    managers = {}
    # to count each manager's number of employees
    employee_count = {}
    count = 0
    for employee in employees:
        count += 1
        if not employee.managerId:
            employee_count[employee.id] = 0
        elif employee.managerId in employee_count:
            managers[employee.id] = employee.managerId
        elif employee.managerId in managers:
            managers[employee.id] = managers[employee.managerId]
        else:
            managers[employee.id] = employee.managerId
    for employee in managers:
        manager = managers[employee]
        # while manager in managers:
        #     count += 1
        #     manager = managers[manager]
        employee_count[manager] += 1
        count += 2
    return(employee_count, count)


if __name__ == '__main__':
    print(main())
