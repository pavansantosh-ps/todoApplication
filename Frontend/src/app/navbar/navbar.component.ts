import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isdarkMode: boolean = false;
  @Output() darkMode = new EventEmitter();
  @Output() filter = new EventEmitter();

  handleDarkMode = (current: boolean) => {
    this.darkMode.emit(!current)
  }

  options: { parseValue: string; displayValue: string }[] = [
    {
      parseValue: "all",
      displayValue: "All"
    },
    {
      parseValue: "open",
      displayValue: "Open"
    },
    {
      parseValue: "inProgress",
      displayValue: "In Progress"
    },
    {
      parseValue: "onHold",
      displayValue: "On Hold"
    },
    {
      parseValue: "executed",
      displayValue: "Executed"
    },
    {
      parseValue: "rejected",
      displayValue: "Rejected"
    }
  ]

  onClick = (value: string) => {
    this.filter.emit(value)
  }
}
