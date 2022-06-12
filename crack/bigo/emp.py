class Employee:
    def __init__(self, id, name, managerId):
        self.id = id
        self.name = name
        self.managerId = managerId


def main():
    emp1 = Employee(1, 'a', None)
    emp2 = Employee(2, 'b', None)
    emp3 = Employee(3, 'c', 1)
    emp4 = Employee(4, 'd', 3)
    emp5 = Employee(5, 'e', 4)
    emp6 = Employee(6, 'f', 2)
    employees = [emp1, emp2, emp3, emp4, emp5, emp6]
    managers = {}
    employee_count = {}
    for employee in employees:
        if not employee.managerId:
            employee_count[employee.id] = 0
        elif employee.managerId in employee_count:
            managers[employee.id] = employee.managerId
        else:
            managers[employee.id] = managers[employee.managerId]
    for employee in managers:
        employee_count[managers[employee]] += 1
    return(employee_count)

if __name__ == '__main__':
    print(main())
