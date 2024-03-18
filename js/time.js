import { timedata } from "./data.js";
const time = document.getElementById("timediv");
timedata.forEach((data) => {
  const timeDiv = document.createElement("div");
  timeDiv.id = data.id;
  timeDiv.classList.add("col");
  timeDiv.innerHTML = `
    <div class="d-flex col-10 d-flex justify-content-start align-items-center">
  
            <h3 class="">${data.month}</h3>
            <h3 class="mx-2">${data.week}</h3>
            <span><i class="mx-2 pb-2 fa-solid fa-calendar-days"></i>${data.Gotodate}</span>
      
    </div>
  
        `;
  time.appendChild(timeDiv);
});
const calendar = document.getElementById("calendar");
timedata.forEach((data) => {
  const calendarDiv = document.createElement("div");
  calendarDiv.id = data.id;
  calendarDiv.classList.add("col", "theme-treatment-time");
  calendarDiv.innerHTML = `
      <table class="bordered-table">
            <thead>
				<tr>
				 
                  <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
					        ${data.daymon}
					        </font></font><span class="date-nr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.datemon}</font></font></span>
				        </th>
				        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                ${data.daymon}
					        </font></font><span class="date-nr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.datemon}</font></font></span>
				        </th>
				 
                  <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  ${data.daymon}
					        </font></font><span class="date-nr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.datemon}</font></font></span>
				        </th>
                <th>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    ${data.daymon}
                    </font></font><span class="date-nr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.datemon}</font></font></span>
                  </th>
                  <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    ${data.daymon}
                  </font></font><span class="date-nr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.datemon}</font></font></span>
				        </th>
				 
				</tr>
			</thead>
			<tbody>
            
					    <tr id="row-0">

					
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
                                        <label class="time">
                                            <a href="${data.drlink}">
                                            ${data.appointment}
                                            </a>
                                        </label>
						         
						    </td>
					    
					    </tr>
				    
					    <tr id="row-1">

					
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
							<label class="time">
							<a href="${data.drlink}">
							${data.appointment}
							</a>
						</label>
						    </td>
					    
					    </tr>
				    
					    <tr id="row-2">

					
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
							<label class="time">
							<a href="${data.drlink}">
							${data.appointment}
							</a>
						</label>
						         
						    </td>
					    
					    </tr>
				    
					    <tr id="row-3">

					
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
						    </td>
					    
						    <td>
                            
							<label class="time">
							<a href="${data.drlink}">
							${data.appointment}
							</a>
						</label>
						         
						    </td>
					    
					    </tr>
				    
				</tbody>
			</table>
        `;
  calendar.appendChild(calendarDiv);
});
