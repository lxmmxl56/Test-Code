class Employee:
    def __init__(self, id, name, managerId):
        self.id = id
        self.name = name
        self.managerId = managerId

    def __str__(self):
        return f'{self.name}:{self.managerId}'

    def __repr__(self):
        return self.__str__()


def main():
    emp1 = Employee(1, 'a', None)
    emp2 = Employee(2, 'b', None)
    emp3 = Employee(3, 'c', 1)
    emp4 = Employee(4, 'd', 3)
    emp5 = Employee(5, 'e', 2)
    emp6 = Employee(6, 'f', 7)
    emp7 = Employee(7, 'g', None)
    emp8 = Employee(8, 'h', 6)
    employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8]
    employees.sort(key=lambda x: x.managerId or 0)
    managers = {}
    employee_count = {}
    for employee in employees:
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
        while manager in managers:
            manager = managers[manager]
        employee_count[manager] += 1
    return(employee_count)

if __name__ == '__main__':
    print(main())
