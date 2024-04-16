import basworkout from '../Assests/basworkout.jpg'
import badworkout from '../Assests/badworkout.jpg'
import fworkout from '../Assests/fworkout.jpg'
import cwork from '../Assests/cwork.jpg'


let sport_place=[
    {
        id:1,
        name:"BASKETBALL",
        sportimg:basworkout,
        details:"Welcome to the  basketball workout routine designed to enhance your strength, agility, and overall performance on the court. This program integrates basketball-specific exercises along with traditional strength training movements like squats to help you dominate the game. Whether you're a beginner or a seasoned player, this program will push your limits and elevate your skills to the next level.",
        about:"Skill,Agility training",
        req:"Dumbbells,Basketball,Cones",
        days:{
            1:{
                // id:1,
                dayname:"Day1",
                goal:"Strength Training",
                duration:"4workouts/1hr",


                exc:[
                    {
                        id:1,
                        name:"Jumping Jacks",
                        equipment:"No equipment",
                        set:"3",
                        reps:"5",
                        utube:"https://www.youtube.com/watch?v=iSSAk4XCsRA&pp=ygUNanVtcGluZyBqYWNrcw%3D%3D",
                        wimg:"data:image/jpeg;base64,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",

                        checked:false

                    },
                    {
                        id:2,
                        name:"Squat",
                        equipment:"Dumbbells",
                        set:"4",
                        reps:"8-10",
                        utube:"https://www.youtube.com/watch?v=xqvCmoLULNY&pp=ygUFc3F1YXQ%3D",
                        wimg:"https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",
                        checked:false
                    },
                    {
                        id:3,
                        name:"Bench Press",
                        equipment:"Barbell",
                        set:"3",
                        reps:"8-10",
                        utube:"https://www.youtube.com/watch?v=SCVCLChPQFY&pp=ygULYmVuY2ggcHJlc3M%3D",
                        wimg:"https://cdn.squats.in/kc_articles/165710974746405e93d3730146b9b.png",
                        checked:false

                    }
                    ,
                    {
                        id:4,
                        name:"Overhead Press",
                        equipment:"Dumbell",
                        set:"3",
                        reps:"16",
                        utube:"https://www.youtube.com/watch?v=M2rwvNhTOu0&pp=ygUXb3ZlcmhlYWQgcHJlc3MgZHVtYmJlbGw%3D",
                        wimg:"https://fitliferegime.com/wp-content/uploads/2021/12/Standing-Overhead-Dumbbell-Shoulder-Press.jpg",
                        checked:false

                    }


                ],
                checked:false
            },
            2:{
                // id:1,
                dayname:"Day2",
                goal:"Agility Training",
                duration:"4workouts/1hr",

                exc:[
                    {
                        id:1,
                        name:"Jumping Jacks",
                        equipment:"No equipment",
                        set:"3",
                        reps:"5",
                        utube:"https://www.youtube.com/watch?v=iSSAk4XCsRA&pp=ygUNanVtcGluZyBqYWNrcw%3D%3D",
                        wimg:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIQERAWFhUTEhUQFRYRFxYXFhUSFRUXGRYSFRcYHSggGBomGxUTITEhJSktLy4uFyA1ODMtQygtLisBCgoKDg0OFRAQFi0dHR0tLS0tLS0tLS0tLS0rKy0rKy0rLS0tKy0tLSsrKy03LS0rKy0rKysrLSsrNzcrKy0rK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAEIQAAICAQIDBgMEBwcBCQAAAAECAAMREiEEMUEFEyJRYXEygZEjUmJyBhQzQnOCoVNjkqKxsrOTJEN0g6PBwsPR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABoRAQEAAwEBAAAAAAAAAAAAAAABAhESITH/2gAMAwEAAhEDEQA/APuMREBERAREQEREBERAREQEREBERAREQEREBESq7SW27KUsFCsAzEsNRG5UFdyBtnGMk4zsQQtZyPEJvl12IB3GxJwAfLJ2lN2F2ewte9mycNWW++Sy5OeuNAHkMkADBLQaexfHfXW66jksW8eskkhnGfEc6c5OcqNgoUMHrIkXgXO9TfFXgZJzqQ50WZ8zgg+qnpgmVAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA0vtCKztyVSx9gMmQaNahal0hyptsJyVQuxJAAIJyxfG/JT8+3GeJ66+hPet+WsggZ89ZT3AaZ4PdrX830j8qAKR/jFn1gc+A7MSo6hu2nRnkAu3hA8hgYzk42zMWdmgWd9XpV8EHKncHc7ggjJ3PMEgHGQDJ8QK0cQQwtIxg9xcM50nOUfP3fFnkNrMnGCJZSG6DvcEZW2shgeWUPLHUlXbPogmeBYjVUxya8YJ3LVnOhj67MpPUoT1gS4iICIiAiIgIiICIiAiIgIiICIiAiIgQO1uJKhEUMTZYE8GNWMEsRkgchjOds56Yka2gBSU4axGAJDoateR1J1kueuGyD1nXtCo/rHDWEEqpsXOcBWZDgkZ3zjSPLPrLGxwoLMcAAkk9AOZgUn6Mdp2Wqe8YMdIYEADqQ3LpkEDrsfQS9lH+i/DGtRWylSKa/CTkqDZcQpO+4BA5n5y8gIiICIiAiIgIiIETh97Lm8tFXyVdef8A1T9Jnsz9kjffBtPobCXI+rGYpH2tq42KpYfUtqQ/0rWZ7OOFNZ51Ma/kAChJ6nQUz65gb38UFOkKWbGrSmM48ySQFGx5kZwcZxOY7QrB0ue7b7tpCk/lOcNzHInnIPZmq032i11BuZF0quCtYCBgXQkjIO428vMx+3eE8fCq9rlXuNeoqvhJrcr8KjAOkrvtll6gQLfj9u7f7lqn5Nmsn5a8/KLhi2s+auhHp4Wz8ioH80i171U15yS61k/wiS2ffuiD7yVZ+2r/AIVv+6qBKiIgIiICIiAiIgIiICIiAiIgIiICIkIKbSxLEVqxQBCVLFdmZmG+zAgAY5EnORgOfadyvnh1f7Q6ThMFqxqB70g5C4xkatiQBvHGcNcyYLggYYqi6TZpIPdksxAU4wR1zzAzInChRxjBVCqtJqAUADUClm2Op7w/4TLyBQfo32gLWbU+bNGlg2zaq7rgw0nB2yo5dRL+UfZao1nE1MAytc1yBgNiMJZp9Q65z/eSwRTW6rqJR8qAxLFXALbE74ID8ycYGIEyIiAiIgIiICIiBFv2tqb7wer5kBwT6AVv/imlr6LQxHhsVULdFsUnSD+bXjPmoHUTtxtJdCAcNsyk8g6kFSfTIGfSK2W2vJXwuuCreowyMPPmCIEbs9RW9lGrn9sgONq22Kj0DA+wZZG7Xs1WIqnI4dlutA6EhhVq25A5Y4wcKPPBx2NX3qu9uHw/dISOaVFgtm+fEdTnI85jttO5RXrwiFlquwMYpdjl1wRpYFic/ibY7QM9hM9hNpXSgNgXJyWZ2DOwxtpDBgCOYbbYBmsKTm2w9FVK/Zt3b+j1/SdbXWtC2MKik4UclUcgPlymvBUlUAb4jlmxy1sctj0yTj0xA7xEQEREBERAREQEREBERARE0JJ5QN4mmD5zYQMyBVdoptfGdDXvg7ZxY5xmT5VWjPC8QP8AxQ/z2QKytGwGJKvqNuRjw2MSWxnp4mX2kpuOvIx3iD1Ws6h6jU5GfcGc6OHucZFaggsp1PhdSsVbTpDEjIOMgbeUkDsy771Y9PEf823+k6W4o9QLM1qHr+KoFlzk6tt1bfJyM/PB6S94o5NDA7d5nPoarAD9SPrKjjeDvCnArGorWG1sdJdgobToGcFgcZHKWLPmiogYy3D7eX2le3y5ScrL8bjtZRNQZtJUREQETV+UyvKBmImGgZlF2hxpqDVpsz8Q1S7ctdJsLj2Ylj54I6y8WUnbFWL0b71TjHTwsm/v4psm6y/GOyuKWkGpgQmcoQpYAYGVOMkbgnJ28Q8pv2nxy2KK0BPjVmYqVACMGGNQGokqBt5n0zEssCjLMAPNiAP6zmvF1nYWIT5BlP8A7zpzNo68deD4ls/qxJ27k1Z/erW3LjPmqAD2UHrPSTz3Crm+nbcFz6hNBDH21GsfMT0MjKaq5fCIiS0iIgIiICIiAiIgIiICcwcTpBgYDQZqyzIO0DCkysU/9mU/2pVvY32A49sviWDHCsR5H/SQL7AtdI6JWb2HQpUgwPfU1Z+UCX2b+zz0Z7HHs1jMD9CJ3yTykPsq5DUiI4YoiqQPiBAA8SndT6ESSqNqB1eHSQVwPizs2efLIxA5cbn7PPI2rn5ZI/qBOKVFqbEHxa7dP4W7xmrb3+Bpr21xtaow1ZddNioniclCGA0jcAkAZO287cIw7xwOTqlwPnkaDj0wlZ/mgduHs1KHHJlDD2IzOw9ZE7J/Y1fwq/8AaJKflAwCTGSOcLmCpgZflMDMy/KZXlA1yRzmzHaa2TL8oGVMhdrUqypqUHFteM/iYIf6OZNTlI3H792n3rU/yZs/+swFXB1Ic11Ip81VQfqBOz15GCAR5EZmRzma7AwDKQQeRByD7EQIPCcOiXW6EVc1VZ0gDPit8pNyTIx2ub8VSY/kdtX/ACJ9ZLTlA1yRzmxMw/KBygYBJjVjnM1zD9IDeZVptNK+sDeIiAiIgIiICaZIm8QNCSZtjaZmDAj8RZprdiNgjNt6AmVfGjwXKelVPD4/OSCw9DrxnzQ+UuGqDKysNmBU+xGDPNHtDvlVgdQ7qty6A6T9tUCpbkWD137eQE1jpbSrY1KGxy1AHHtnlNf1dOWkY8juPpynWcO+Pe6Nsd3r65znGPKdnN1rQKMKAB5KAB9BJvZrYHDAc1W2jH92hwX+tdYz+P1kSRj2n+qo3EW+Gha7WZzv4lttIQKMtg68k4/dXnk4jNWK/wCyzimr+En+0SZznLg69NaJ91FX6ACdpzW0BxM6vSbRA1flMA46TeIGnOZflNogYXlKftHi3W5NIU6ELFXyMlzhSGGdJGizoecuZ5s2a2ez7zHH5F8K49CBq/nMrGbrMrpPXtcdanHtoYfLDZx8hA7WVRhKHx5AIoH1Yf6SAzAAknAAySeQA6mYrsVt1YHfGxB38tvcS+IjqpC8bY11TMFVctWQuWOHGxLHHNlr2x8zLoHE85amoEZweYI5qwOVYeoIB+UvuA4jvK0fGCR4h5MNmX5MCPlJymlY3bqd5sRtMxIU1rmH6TeICaV9ZvEBERAREQEREBERAREQE8t2L+j1nDcNxPDBgyYt7g/vaXaywBtsZDWY28uk9TEDzq1WkAihiCMghqsEHqMuJwbh7NYbu/EWWrSWGdPd2WHltnIXbPzl92Zsmj+zJqx1wpwhPumg/OR7Dg2N1XiagP5kqQ/0dpXVTzEJeHu5dww9WavHzw5OPkZy4/sH9c4Kih20qwra4DJ11subKwdiCSfi6eXSXvaLkVWFeehgv5iMKPridkUAADkBgewmW2tk02iImNIiICIiAiIgR+0bWSqx1GWCMVG2748IGdtzgTzosSsBGymkBQLQU5bbavi9xmeg7S+Afxaf+VJ3usCqzMcKAWJPQAZJlTLTLNvP0167K06Z7xvyVkH+rGsY8iZJ7Xq02rZ0sUVn0dclfqC+/wCEDrJnZvCBdVpQK9uCQABpUZ0IccyNRJ57s3TAEjjOFW1GrcZVvPHMHIIz1BAIPmBHXu2c+aefstVcamAzsMnGT5DzMsewXOLEKsviFihhg6HHPB3GXW3YgGduy6kXUorRHXwvoULq8nAHQjfrg5GTgzqdrh+Ops/+Wy4/5Gi5bJjpKiIkqIiICIiAiIgIiICIiAiIgIiICIiBFp2utA5FK3P5iXUn6Ig+Ui8Vzt8hbQ5Plhk1fRVB+clcLvZcTzDqg/KK1YD6u31ka/4OMyM/EceY7hP/AMMCT2l8A/i0/wDKklSNx6E1OM76CQfxAZDfUAyQjZAPmMwMxEQEREBERAREQIl51WJWOS/av/UIvzOTn+7x1jjtzXX95wx/IniJ9tQRT+eOzhlTaedp1/yf92vp4cHHmW85jgBqzcdy/wAPkKs+ED3GGPqfQYCZERAicV4XSzoSKn9mPgPqQ+APLW0doDSBaOdZyfWs47wHz2GrHmgkmysMCrDIYFSDyIOxBkfgmI1VsclCACebIRlWP+Zc9ShMCSD1EzIfBjQz1dBh09EbPgHswb0AZRJkBERAREQEREBERAREQEREBERAREQItO1ti9GVLPdt1bHsEr+s591r/WV8/svrUp/+c34rZ6n9WqJ6BXGR89aVj5zPB/Fd/F3/AOmgH9AIHLiLtfDM45vTkfmdNh9SJOAlYm9ddY/t+7X8tNrED/DViWkBERAREQEREBIvaZ+yYci+KgR0NhCA/LVmSpF4vd6l/GXI/Cqnf5Ma4DjnIUVpsz+Bcfuj95/ZRv74HUSRWgUBQMAAAAdAOQkbgxqZ7TzLGtfwohI292BbPUFfISXAREQEh8YdDC7oBos/J0c/lP0DOZMgiBF4naylvMvV8mXXn61AfOSpVW+BHr6Vabk8zUraig8yNLL7Fc8zLWAiIgIiICIiAiIgIiICIiAiIgIiIFT+k3Gd1SG6m+hR/wBZCx5HkoZuR+GQewO0y3E3VM4OpFsCkYYlAga3kCQRZUPhA8GceKb/AKVvUppsu7zTUWsTuwzfa4CDIXn4HsGDz1HHKQuC4RFbiuI4WpnsPDEB2A1tcS7d2rnZvhrGx0jSsCN2Z22zfqj7kW8U5KkKEVbTdpKHmxwy9TncgCe3niOD4Ph9VdFNHEAUEPw2vPdo/NCyltaBckYcDG4Izie3gIiICIiAiIgJ5ftTtvRfeVOf1avTpwfEWRbXBOk/u911Gnn4uU9RPFf9kL2VXd9l3HE3KVcqbcgaB1YalUaADkAc1gel7Aszw9RDhwAVDryYKSuoe+Mywld+jnDGrheGrKaClFasgx4W0DUNvXMsYCIiAiIgef8A0j7QNV3DKDp1i4MwAJCAKcDOcZbu99J2BG2czt+ifGNZQQ3Oq2ygEjBKI32ZYZ+LQUz65OBnAifpEFFy2tTczVVDuWpIA8bMLlJYheQpOG3OBpzhsTP0a4ZURzXXYiO3eEXftGubPeO3Pn4OW2xxtiBcxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
                       

                    },
                    {
                        id:2,
                        name:"Shuttle Run",
                        equipment:"None",
                        set:"5",
                        reps:"30 secs",
                        utube:"https://www.youtube.com/watch?v=9pb6JX2ulDU&pp=ygULc2h1dHRsZSBydW4%3D",
                        wimg:"https://www.wikihow.com/images/thumb/c/c3/Survive-a-Shuttle-Run-Step-16-Version-2.jpg/v4-460px-Survive-a-Shuttle-Run-Step-16-Version-2.jpg.webp",
                        // checked:false
                    },
                    
                    {
                        id:3,
                        name:"Jump rope",
                        equipment:"Jump rope",
                        set:"4",
                        reps:"3 minutes",
                        utube:"https://www.youtube.com/watch?v=1BZM2Vre5oc&pp=ygUJanVtcCByb3Bl",
                        wimg:"https://www.realsimple.com/thmb/LqkRwhYXpPBcmq5rnYIYJrX5SeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-jump-illo2-1-d4bcbd6792b3491f8f90fe26cb0a956c.jpg",
                        // checked:false

                    },
                    {
                        id:4,
                        name:"Ladder drills",
                        equipment:"Agility ladder",
                        set:"3",
                        reps:"5 minutes",
                        utube:"https://www.youtube.com/watch?v=66oUAhI0nQQ&pp=ygUNbGFkZGVyIGRyaWxscw%3D%3D",
                        wimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbn3sPtow-3uJGc2u847aLEzWBgGTyVD_Ag&usqp=CAU",
                        // checked:false

                    }
                    


                ],
                checked:false
            },
            3:{
                
                dayname:"Day3",
                goal:"Skill Training",
                duration:"4workouts/1hr",

                exc:[
                    {
                        id:1,
                        name:"Shooting Drills",
                        equipment:"Basketball",
                        set:"1",
                        reps:"20 minutes",
                        utube:"https://www.youtube.com/watch?v=pq4DdAqX3yg&pp=ygUec2hvb3RpbmcgZHJpbGxzIGZvciBiYXNrZXRiYWxs",
                        wimg:"https://www.online-basketball-drills.com/wp-content/uploads/2018/11/pass-catch-shoot-drill.jpg",
                        // checked:false

                    },
                    {
                        id:2,
                        name:"Passing Drills",
                        equipment:"Basketball",
                        set:"1",
                        reps:"15 minutes",
                        utube:"https://www.youtube.com/watch?v=OituSPPT0q0&pp=ygUZcGFzc2luZyBkcmlsbHMgYmFza2V0YmFsbA%3D%3D",
                        wimg:"https://www.online-basketball-drills.com/wp-content/uploads/2018/07/01_FOUR-TYPES-OF-PASSES_03.png",
                        // checked:false
                    },
                    
                    {
                        id:3,
                        name:"Defensive Drills",
                        equipment:"Cones,Basketball",
                        set:"1",
                        reps:"15 minutes",
                        utube:"https://www.youtube.com/watch?v=-VIyqmT1T-Y&pp=ygUdZGVmZW5zZSBkcmlsbHMgZm9yIGJhc2tldGJhbGw%3D",
                        wimg:"https://www.online-basketball-drills.com/wp-content/uploads/2019/12/pngdef9.jpg",
                        // checked:false

                    },
                    {
                        id:4,
                        name:"Full court Dribbling",
                        equipment:"Basketball",
                        set:"3",
                        reps:"10 minutes",
                        utube:"https://www.youtube.com/watch?v=3LemJKkdfpM&pp=ygUmZnVsbCBjb3VydCBkcmliYmxpbmcgZHJpbGxzIGJhc2tldGJhbGw%3D",
                        wimg:"https://www.online-basketball-drills.com/wp-content/uploads/2019/08/quick-draw-basketball-ballhandling-drill.jpg",
                        // checked:false

                    }
                    


                ],
                checked:false
            },
            4:{
                
                dayname:"Day4",
                goal:"High level Intensity Training",
                duration:"4workouts/1hr",

                exc:[
                    {
                        id:1,
                        name:"Sprinting",
                        equipment:"None",
                        set:"3",
                        reps:"10 minutes",
                        utube:"https://www.youtube.com/watch?v=QLBT4-iN2yg&pp=ygUJc3ByaW50aW5n",
                        wimg:"https://fitforgolf.blog/wp-content/uploads/2023/02/3d-medical-figure-running-pose-with-muscle-map_1048-11992-e1677251869885.jpg",
                        // checked:false

                    },
                    {
                        id:2,
                        name:"Plank",
                        equipment:"None",
                        set:"4",
                        reps:"1 min",
                        utube:"https://www.youtube.com/watch?v=yeKv5oX_6GY&pp=ygUFcGxhbms%3D",
                        wimg:"https://www.realsimple.com/thmb/6RIqVHEmfmq6cJsZGvlVQs51LWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cross-body-plank-3-39700e605fbc49d7b9d9757907581bf5.jpg",
                        // checked:false
                    },
                    
                    {
                        id:3,
                        name:"Medicine ball slam",
                        equipment:"Basketball",
                        set:"3",
                        reps:"12",
                        utube:"https://www.youtube.com/watch?v=QxYhFwMd1Ks&pp=ygUSbWVkaWNpbmUgYmFsbCBzbGFt",
                        wimg:"data:image/jpeg;base64,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",
                        // checked:false

                    },
                    {
                        id:4,
                        name:"Stretches concentration on legs and core",
                        equipment:"None",
                        set:"1",
                        reps:"10",
                        utube:"https://www.youtube.com/watch?v=UIRTPXj1Q1U&pp=ygUac3RyZXRjaGVzIGZvciBsZWcgYW5kIGNvcmU%3D",
                        wimg:"data:image/png;base64,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",
                        // checked:false

                    }
                    


                ],
                checked:false
            },
            
           

        },
        
        
        
    },
    {
        id:2,
        name:"BADMINTON",
        sportimg:badworkout,
        details:"Welcome to the badminton workout routine designed to enhance your agility, endurance, and overall performance on the court. This program incorporates badminton-specific exercises along with strength and cardio workouts to help you dominate the game. Whether you're a beginner or an experienced player, this challenge will push your limits and elevate your skills to the next level.",
        about:"Legs,Back,Abs,Shoulder",
        req:"Dumbells,Barbell,Medicine ball",
        days:{
            1:{
               
                dayname:"Day1",
                goal:"Legs,Back,Abs",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Planks",
                        equipment:"None",
                        set:"3",
                        reps:"Hold for 30sec",
                        utube:"https://www.youtube.com/watch?v=pvIjsG5Svck&pp=ygUGcGxhbmtz",
                        wimg:"https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Goblet Squat",
                        equipment:"Dumb-bells",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=wzx1t-0RA0k&pp=ygUMZ29ibGV0IHNxdWF0",
                        wimg:"https://www.youtube.com/watch?v=wzx1t-0RA0k&pp=ygUMZ29ibGV0IHNxdWF0",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Deadlift",
                        equipment:"Dumb-bells",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=p2OPUi4xGrM&pp=ygUIZGVhZGxpZnQ%3D",
                        wimg:"https://www.shutterstock.com/image-vector/man-doing-sumo-barbell-deadlifts-600nw-2034318965.jpg",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Hanging leg raises",
                        equipment:"None",
                        set:"3",
                        reps:"15-20",
                        utube:"https://www.youtube.com/watch?v=Pr1ieGZ5atk&pp=ygUSaGFuZ2luZyBsZWcgcmFpc2Vz",
                        wimg:"https://kinxlearning.com/cdn/shop/files/exercise-21_923x.jpg?v=1613154789",

                        checked:false
                    },
                    
            

                ],
                // checked:false
            },
            2:{
               
                dayname:"Day2",
                goal:"Chest,Arm,back,Shoulder",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Bench Press",
                        equipment:" Barbell",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=KjYak5vZO9s&pp=ygULYmVuY2ggcHJlc3M%3Dhttps://www.youtube.com/watch?v=pvIjsG5Svck&pp=ygUGcGxhbmtz",
                        wimg:"https://cdn.squats.in/kc_articles/165710974746405e93d3730146b9b.png",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Dumbbell chest fly",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=Nhvz9EzdJ4U&pp=ygUSZHVtYmJlbGwgY2hlc3QgZmx5",
                        wimg:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Hammer curls",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=OPqe0kCxmR8&pp=ygUMaGFtbWVyIGN1cmxz",
                        wimg:"https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Bicep Curls",
                        equipment:"Dumbbell",
                        set:"3",
                        reps:"12-15",
                        utube:"https://www.youtube.com/watch?v=ykJmrZ5v0Oo&pp=ygULYmljZXAgY3VybHM%3D",
                        wimg:"https://www.armyprt.com/wp-content/uploads/2023/06/inner-bicep-curl-muscles-1536x1081-1-1024x721.png",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
            3:{
               
                dayname:"Day3",
                goal:"Legs,Back,Shoulder",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Russian Twist",
                        equipment:"Medicine Ball",
                        set:"3",
                        reps:"20",
                        utube:"https://www.youtube.com/watch?v=wkD8rjkodUI&pp=ygUNcnVzc2lhbiB0d2lzdA%3D%3D",
                        wimg:"data:image/png;base64,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",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Hyperextensions",
                        equipment:"Not needed",
                        set:"3",
                        reps:"15",
                        utube:"https://www.youtube.com/watch?v=MT0U96RqkhM&pp=ygUPaHlwZXJleHRlbnNpb25z",
                        wimg:"https://weighttraining.guide/wp-content/uploads/2016/10/45-degree-hyperextension.png",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Bent Over Row",
                        equipment:"Barbell Rows",
                        set:"3",
                        reps:"12",
                        utube:"https://www.youtube.com/watch?v=9Gf-Ourup_k&pp=ygUNYmVudCBvdmVyIHJvdw%3D%3D",
                        wimg:"https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Lat Pulldown",
                        equipment:"Resistance Band",
                        set:"3",
                        reps:"12-15",
                        utube:"https://www.youtube.com/watch?v=CAwf7n6Luuc&pp=ygUMbGF0IHB1bGxkb3du",
                        wimg:"https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/wide-grip-lat-pull-down-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
            4:{
               
                dayname:"Day4",
                goal:"Arms,Shoulder,Traps",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Bicep Curls",
                        equipment:"Dumbbell curls",
                        set:"3",
                        reps:"12",
                        utube:"https://www.youtube.com/watch?v=ykJmrZ5v0Oo&pp=ygULYmljZXAgY3VybHM%3D",
                        wimg:"https://cdn.shopify.com/s/files/1/2384/0833/files/inner-bicep-curl-benefits.jpg?v=1689192787",

                        checked:false
                    },
                    {
                        id:2,
                        utube:"https://www.youtube.com/watch?v=6kALZikXxLc&pp=ygULdHJpY2VwIGRpcHM%3D",
                        wimg:"https://qph.cf2.quoracdn.net/main-qimg-cf2058c891a58de973cc146af500a09e-lq",
                        name:"Tricep Dips",
                        equipment:"Parallel edges",
                        set:"3",
                        reps:"15",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Front Raises",
                        equipment:"Resistance band",
                        set:"3",
                        reps:"12",
                        utube:"https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-d7467d5/www.aleanlife.com/wp-content/uploads/2023/02/dumbbell-front-raise.jpg",
                        wimg:"https://www.youtube.com/watch?v=sOcYlBI85hc&pp=ygUMZnJvbnQgcmFpc2Vz",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Upright Rows",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"15-20",
                        utube:"https://www.youtube.com/watch?v=fy-Ou88ruAk&pp=ygUMdXByaWdodCByb3dz",
                        wimg:"https://static.strengthlevel.com/images/illustrations/upright-row-1000x1000.jpg",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
           

        },
       
    },
    {
        id:3,
        name:"FOOTBALL",
        sportimg:fworkout,
        details:"Welcome to the football workout routine designed to elevate your game, improve your endurance, and enhance your football-specific skills. This program integrates football drills, strength training, and cardio workouts to help you excel on the field. Whether you're a beginner or an experienced player, this challenge will push your limits and take your football performance to the next level.",
        about:"Legs,Back,Abs",
        req:"Dumbells,Barbell,PullBar",
        days:{
            1:{
               
                dayname:"Day1",
                goal:"Legs,Back,Abs",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Box squat",
                        equipment:"Dumbbell",
                        set:"5",
                        reps:"3",
                        utube:"https://www.youtube.com/watch?v=LeiLzSU3OXE&pp=ygUNaGlnaCBib3gganVtcA%3D%3D",
                        wimg:"https://www.gofitnessplan.com/images/exercises/female/box-jumps.jpg",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Weighted back extension",
                        equipment:"Bench",
                        set:"4",
                        reps:"12",
                        utube:"https://www.youtube.com/watch?v=Ry-wqegeKlE&pp=ygUNcmV2ZXJzZSBsdW5nZQ%3D%3D",
                        wimg:"https://www.wikihow.com/images/thumb/c/c0/Do-a-Reverse-Lunge-Step-8-Version-2.jpg/v4-460px-Do-a-Reverse-Lunge-Step-8-Version-2.jpg.webp",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Dumbbell Side bend",
                        equipment:"Dumbbells</",
                        set:"3",
                        reps:"15",
                        utube:"https://www.youtube.com/watch?v=zoDyNPb212o&pp=ygUWZHVtYmJlbGwgb25lIGFybSBzd2luZw%3D%3D",
                        wimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNrVcc5IAoepAip6Yv01WHc-PhOv6q1BnkawtCFZn4bf_lUj7GYXyl_Q9A8yuG3hpWbQ&usqp=CAU",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Sprinter situp",
                        equipment:"None",
                        set:"5",
                        reps:"3",
                        utube:"https://www.youtube.com/watch?v=pSHjTRCQxIw&pp=ygUGZHBsYW5r",
                        wimg:"https://t4.ftcdn.net/jpg/03/90/37/87/360_F_390378753_yu521kuCc3r1fzkSMXInVdgNgMdIpV6e.jpg",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
            2:{
               
                dayname:"Day2",
                goal:"Chest,Arm, Back, Shoulders",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Bench press",
                        equipment:"Barbell",
                        set:"5",
                        reps:"3",
                        utube:"https://www.youtube.com/watch?v=4Y2ZdHCOXok&pp=ygULYmVuY2ggcHJlc3M%3D",
                        wimg:"https://cdn.squats.in/kc_articles/165710974746405e93d3730146b9b.png",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Dumbbell row",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"8,20-25",
                        utube:"https://www.youtube.com/watch?v=roCP6wCXPqo&pp=ygUMZHVtYmJlbGwgcm93",
                        wimg:"https://static.strengthlevel.com/images/illustrations/dumbbell-row-1000x1000.jpg",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Neutral grip floor press",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"8,8,6,6",
                        utube:"https://www.youtube.com/watch?v=X3N2l0Mtqro&pp=ygUYbmV1dHJhbCBncmlwIGZsb29yIHByZXNz",
                        wimg:"https://fitliferegime.com/wp-content/uploads/2022/10/Neutral-Grip-Chest-Press.jpg",

                        checked:false
                    },
                    {
                        id:4,
                        name:"BenchPress",
                        equipment:"Barbell",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=pSHjTRCQxIw&pp=ygUGZHBsYW5r",
                        wimg:"https://t4.ftcdn.net/jpg/03/90/37/87/360_F_390378753_yu521kuCc3r1fzkSMXInVdgNgMdIpV6e.jpg",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
            3:{
               
                dayname:"Day3",
                goal:"Legs, Back, Shoulders, Abs",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"High Box Jump",
                        equipment:"Box",
                        set:"8",
                        reps:"2",
                        utube:"https://www.youtube.com/watch?v=LeiLzSU3OXE&pp=ygUNaGlnaCBib3gganVtcA%3D%3D",
                        wimg:"https://www.gofitnessplan.com/images/exercises/female/box-jumps.jpg",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Reverse Lunge",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"10 each leg",
                        utube:"https://www.youtube.com/watch?v=Ry-wqegeKlE&pp=ygUNcmV2ZXJzZSBsdW5nZQ%3D%3D",
                        wimg:"https://www.wikihow.com/images/thumb/c/c0/Do-a-Reverse-Lunge-Step-8-Version-2.jpg/v4-460px-Do-a-Reverse-Lunge-Step-8-Version-2.jpg.webp",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Dumbbell One Arm Swing",
                        equipment:"Dumbbells",
                        set:"3",
                        reps:"15(each arm)",
                        utube:"https://www.youtube.com/watch?v=zoDyNPb212o&pp=ygUWZHVtYmJlbGwgb25lIGFybSBzd2luZw%3D%3D",
                        wimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNrVcc5IAoepAip6Yv01WHc-PhOv6q1BnkawtCFZn4bf_lUj7GYXyl_Q9A8yuG3hpWbQ&usqp=CAU",

                        checked:false
                    },
                    {
                        id:4,
                        name:"DPlank",
                        equipment:"No equipment",
                        set:"3",
                        reps:"Hold for 30 sec",
                        utube:"https://www.youtube.com/watch?v=pSHjTRCQxIw&pp=ygUGZHBsYW5r",
                        wimg:"https://t4.ftcdn.net/jpg/03/90/37/87/360_F_390378753_yu521kuCc3r1fzkSMXInVdgNgMdIpV6e.jpg",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
        
        4:{
               
            dayname:"Day4",
            goal:"Arms,Shoulders,traps",
            duration:"4workouts/1hr",
            exc:[
                {
                    id:1,
                    name:"DPLYO Pushup",
                    equipment:"None",
                    set:"8",
                    reps:"5",
                    utube:"https://www.youtube.com/watch?v=Y-uF4F3mQIs&pp=ygUOcGx5byBwdXNoIHVwcyA%3D",
                    wimg:"data:image/jpeg;base64,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",

                    checked:false
                },
                {
                    id:2,
                    name:"Chin up",
                    equipment:"Pullup Bar",
                    set:"3",
                    reps:"30 sec armwrap",
                    utube:"https://www.youtube.com/watch?v=8mryJ3w2S78&pp=ygUHY2hpbiB1cA%3D%3D",
                    wimg:"https://www.shutterstock.com/image-vector/man-doing-chin-ups-workout-600nw-2292888453.jpg",

                    checked:false
                },
                {
                    id:3,
                    name:"Shrug",
                    equipment:"Dumbbells",
                    set:"3",
                    reps:"30 sec armwrap",
                    utube:"https://www.youtube.com/watch?v=cJRVVxmytaM&pp=ygUOZHVtYmJlbGwgc2hydWc%3D",
                    wimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdg6cWDHseiDUAILqx0cn8m8_c_uf1mj0XA&usqp=CAU",

                    checked:false
                },
                {
                    id:4,
                    name:"Hammer Curl",
                    equipment:"Dumbbells",
                    set:"3",
                    reps:"20",
                    utube:"https://www.youtube.com/watch?v=OPqe0kCxmR8&pp=ygUMaGFtbWVyIGN1cmxz",
                    wimg:"https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233",

                    checked:false
                },
                
                
        

            ],
            // checked:false
        },
    },
        
    },
    {
        id:4,
        name:"CRICKET",
        sportimg:cwork,
        details:"Welcome to the cricket workout routine designed to elevate your performance on the field, improve your cricket-specific skills, and enhance your endurance. This program integrates cricket drills, strength training, and cardio workouts to help you excel in all aspects of the game. Whether you're a beginner or an experienced player, this challenge will push your limits and take your cricket performance to the next level.",
        about:"Strength,Cardio",
        req:"Jump-Rope,Barbell",
        days:{
            1:{
               
                dayname:"Day1",
                goal:"Strength Training",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Barbell Squats",
                        equipment:"Barbell",
                        set:"4",
                        reps:"8-10",
                        utube:"https://www.youtube.com/watch?v=kRX2NfqM90g&pp=ygUOYmFyYmVsbCBzcXVhdHM%3D",
                        wimg:"data:image/jpeg;base64,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",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Bench Press",
                        equipment:"Barbell",
                        set:"3",
                        reps:"10-12",
                        utube:"https://www.youtube.com/watch?v=xqvCmoLULNY&pp=ygUFc3F1YXQ%3D",
                        wimg:"https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Bench squat",
                        equipment:"Barbell",
                        set:"3",
                        reps:"8-10",
                        utube:"https://www.youtube.com/watch?v=ATLPyJsT4rg&pp=ygULYmVuY2ggc3F1YXQ%3D",
                        wimg:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUREhgRERUYGBgYGhoZGBgYHB8aHBgcGBwaGRoaGBwcITwlHB4rIRkYJjgmKy8xNTU1HCQ7QDs0Py40NT8BDAwMEA8QHhISHzErIyw/OjUxND80NDQ0NjE2PTE2NDc0Nz00NDQ2PTQxNDQ0NDQ0MTQ0NDQ0NDQ0OjQ0NDQ0NP/AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABBEAACAQIEBAIJAAgEBQUAAAABAgADEQQSIfAFBjFhQVEHEyIycYGRodEUQlJicoKSsSMzssEVc6LC8RYkQ2OT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJxEBAQEAAgIBAwQCAwAAAAAAAAECAxESIQQxQVEiMmFxgZEFExT/2gAMAwEAAhEDEQA/AOx732je+8Rvf5gIiICJMQEREBERAREQEREBERASZEmAiIgRERAREQEREBERAREQIiTIgIiICRJkQJ3v8xvf4kSYCIiAiYfFMcmGoviKxslNS7HxsvgPMnp3vOCcU9J3Ea1UvSq+oS/sU1RSFF9MzOpLNa1/DyAgfoiJQfRpzseJI1DE5RiKYDEqABVTpnA8GBsDbT2lI62F+gIiIHyq1FRS7kKFBZidAABcknsPGc6f0lVa1Y0uH4Jqqjo9RvV5he1wuXQfE37CXLmmgamCroNL02vb9katYfAHSVnhOFSmciEdBY2Gnl0Mq5N3PUi/h4867tWTl7jRxat6yi9Cqlg9N9bX6FWGjqbHXTp0E3UqnLy1P0ljUdWPqzmCi1yXBB+AGg89Za5PGrZ3VfLmZ11CIiSQIiIEyIiAiIgIiICIiAiIgIiICRvf4iIDe/zERASJM8/T6QPW995G99o3vtJ3vvArPNfNicOamj02f1gc3zBQuTL1JGpObT4TU0/SdQPWhU/lZD/dhLvWoI4tUVWA8GAYfcTEqcEwzaNh6J+NND/2wOZekDm1eI4L9FwqVFLVEL58gBRLtYFXOucJ9DOWVuHVEF2XTzBBnYPS1y7QpYAYjDUKdJkqoXamioSrhlsSoFxnZDOMB3I1ZiL+ZtfwgWX0bY8YbilB3cIhzq5YgLlZG94np7QQ/ECd6qcx4f8A+N/Wa2/w/aF/4vdv85wn0ZcJGL4kiVEDoivUqKehUKVUf1un0nU8dy5h8LWFRFKg3KqrPZlFi6ML2IGhB+R6ax3qydrOPM1rqrnQxaOAVYfC4uPO4n3v5SoUeTsHikXE1UYvUUOzK7r7wFhlvYWFhoPCaKjy7QNVjRzimpyrdyc2U6t8/AeQHnOa3M57rueO61ZPovPE+IKqtTX23IICjwLCwzHoo1+NugMp1TA1qarUoMudUCOj6K+TQOGA9k2t4GfRMPUwrf4RzqeqsT18wesY7ib5LvSKC4zMrZrLcBjaw/VJmPXLdX2244ZievaxcsYclTi2Cg10plQrFgFylhqVGpLnTsNZ9eauPpw/B1MU1myiyLf3nY2Vb+V+vkAZzxeIY0VjhFxD0wQ5pJlVg6L7WVDoVIQNYa+6B4zB9IZZMKoqKWoriAqpmZcrerYq3kDYPp3vNWNTqSMfJjXd1pSeI82Y7E1DVqYmqGJ0VHZFUeAVVIAA+vmTOneifnarinbAYty7BS9Ko3vMFtmRz+sbG4PWwa/hOVtWoepKhAHPujqwPmWtM7kIYj/iFNsGoaqodlU2tbKwbNcgWsfMa2lql+momi5bxOOcP+n0Up2y5MhBLXzZrhXYaez5dTN7AREQEREBERAREQG99o3vvEQEQYgRG99oje+8BvfeI3vtEBIiICN7/Mb3+Y3v8QJiIgYvEcFTxNJ6FUZkqKVYeYbT5HyM4nxD0SY1KhWg9KpTv7LOxVrfvrl6jte/2ndogVLkLk5eFUWBYPWqWNWoNBp7qJfXKLnXqSSdNAMzm82p0mt0qgE9mRx8tcv2lg3v8TW8xYQ1sNURRdgMyDzdLOo+ZUD4EyG53mxPjvWpWk4fxr1VFqA9qqGIpL5q2oZvJVOa/YKOpE1OMw7IiYegxDmwZhqFUdTrMTAY8es9YCuqEAk6e2VIP0VpmMlVLYgqfVlgrO2hbPopVf2b2Fz4sLXGsx3Wtyfw35znGr/L7cKzoxpVWzEHRumYdRfvPfGFX1bgkWsZ90prVvfrfQjQj4GaLmDhLvTcriGAUWy2AzE+BPzEr67Wd+2PTrqamDqObkAE/NGvvtLpxnlhcbgGwlQ5XYB89r5ao1DdwD7Nv2dJVeVeBipiiGZnWgQLn3Rbw+J0FvLN2nT5r4M9Ttj+TqW9R+asZyDxKlU9WcI762DU7Mp7hr6D+KxnVfRlyQ3DlbEYm36RUULlBuKS3uVuNCxIF7aeyLeZ6BE0MpERAREQE8swAuSAB1JNgPn/ALz1OF+mHmN6+LPD0YijRy+sUaB6jANdvMKCoA879oHb6NZXF0ZWHmpBH2/tPrPy1yvx+rw3ELiKJNgQHQe7US/tKw87XsfAz9PYXErVppVQ5ldVdSPFWAZT9CIH3iIgJyzn+ricZimwlGq1KlSyBgpK+sd1De0RqVAZQF6XudfDqW9/iUzmWstKu5A0C03cjW2ZihYjsET5GV8tsz6W8OZrXVaHhXB24YUr08ZUIBvWpO2ZGW4zafqkA6MOh+k6lKJiFSsEZEWoXdEzCxFiwOY9h73T9WXoSPFbZe0+fMlnRE4D6SOda+JxT4ehUdKFJigCMV9YynK7OVNyM1wB0sAfGazk7nXEcPrqz1Kj0CQKtNmLjKTq6XPssBrp1tYy5nfpGJ5VgQCDcEXBHiD01/3nqBEREBvf4je/zG9943vtAmJEmAiI3vvARG99oga6hwXD03NRaCByb5souCT1F+nymRj8MtWm9N/dZSp7AjqPIjrftMmVjn/j64DBlyLmoy0Vt1BcNdreNlDEdwJzqSO921ruDP6zDpUOhZFY/MAzF4vWIoqLg5nW4trqwvMLg/H8MEVErAAgDK4KZf5iMv3ms5qxZFOmqMMocsSDppc+Gk865s9WPUzZfcva/ciqP0TP+tUd3bS2ubL08rAfWWWVj0fVA2ARw2a5e9vNGKHXx92/zlnm/H7Y83kv6qRESaBEb32iAnNqnPOOzMBgSLMwsUqsRZiBcqLHpf5zpMQOaf8ArbiJ6YFj8MPiD/acu44Eq4qrVxDtTqO7u6FCpRmJOXKwzC3Sx10E/Tk4D6XuBth+IHE2Pq8SAwYdA6qFdfiQA3zPlAouIVQxyNmGupE7Ny1xTiS8Pw4pUFNIIFSoGTMVUlV957A6AC6+Q8ZxujQaq6U6SlmdgiKOrMTZR9x9J+ouD8KGHwdLCXuEpLTJ8yFAZvmbmcv0dzeqruExeNZQ2Hys73OSsTYKujEgH2WBKrb4zzxDifFcOnrKiYQC4AALlmJ6KoB1PU/ImfTlrG5cQBUa/rkyg+GendtPIkFz/KJ9OLYn1+ILJ7SUVy38M5N3sfHoo+IMp8+sd/dovH5cvX2a2lzDjSbYnIiHq1NTcfNmNvpNrRoIBnQ3uDmYnMXzdcxPXwmspcWTEHIEYAglSwsGsbHL56z3U4UgF7WNuo0/tMuuTVvtrzx4k6npoq2LbC4tf0dqVFKgzZnUPkK3VnUW01Yg28Beb2kmL9flq1s1UvlV1FlVSoIso94HNcj93tKrxbBrUwrtcmpRZ1Rz1C++Bf5zo3LWGGVTcsKaqiltSTlBZyT1JuBf4+cv49XU6U8uZm3T8+molHEVEqJlZHdHJJe7KxDaHpcgzV4qorOzquVSbhfITsvP/o2fGVji8CyB3/zabnKGYC2ZGANmIAuDoet5reUPRVVSulbiBQJTIZaSNnLsDcZzawW4GgvfppNTCtXAOWsci4dqmPfKq02alkboApNMk1LW/V6fKXmDvfnIgIiIEb32k733kb33je+0Cd77REQJje+0RAb33iN7/MQE5J6dsZZcJhx0LPUP8gVF/wBbTrc5p6YOEpiBhqjNlKGr4XuuVWItfzUfWc1ZJ3Us5utSRy2nT/wtepBPwA8fraaVyamVV6nr28yZdcNwoerc5+ir1XwJt5yOXeUqlSmHuiqdbk3Jv00A/vKc8ub37a+X428STpf/AEO4y2EfCN1pOWX+Cob/AGYP9ROiTlHKlMYTG0CrlhUarRY9B4208faprOryzGpqdxn5uLXHrrX9pkSYk1REiTAREQImHxPhtHFUjRxFNaiHqrC+o6EeIPcazNkQK/wTk3A4F/WYbDqr6gMzM7AHrlLE5R8LSwxIgcw4onq3egGIKVPZIJBAJVksRqDlcCZeOrj1Yo0lIToFQavbqFA1tYamWjivLdHE1RWdnVgADkIAbKTYm4Oov1FvDyEzsHw+jh1JRQumrEkkga6sdbduky/9Ftvv02f+iTM9e1RAWoqGnYFRdfK1tBp0E+XEOLMi2am9/AKha57WFiJ6wCDItWnorXyg/skkqD8rTzjOJKlNqhJBtlRSOpPl8TpM3X2av5VjBmvi74enTYNXctmI0RdFLtr0AF/t1nXsBhFoU0pJ0UWuepPiT3JuTKzyJgPZbFE3DKtOnpayIfaP8zX+SiXCbeHHjO/ywc/J5a6+0I3vvEiXKDe+0REBIkyPr9IDe/zG9/iN7/Eb3+YEyN73rJiAk73+ZEb3+IE73+Ije/zMfFY2nRF6tREHmzBR9zAyJzr0q4gqcPT8GWofo9Ef2JlgxnPnDaNy+MpG3ghNQ/RAZQecebMHxN6SYQu7Uw5JKFQV9lrDNqTdB4eMhyftq749k5c2/liVqwVXU21RR/qMz+A48JhFe/Rb2/esAB9SJXeKUXKvVa6IgUG+ly1+l+2s+PBMeKtK5XKq1FzKLkKoudL62uVnnzFmbXvc3JjXJnKw8v1CcbhKB1ZapY/IO5P0nZpwqhzCuAxScQeh631iuEXP6soqlULm6nMSL26aHvO0cI4guKw9PE0wQtVFdQeoDC9jY9Zs+PmzHv7vJ/5Dkm+a9fb0zokRL2E3v8SZEQJiREBG9/iIgIiICc29J3MpoV8PgczKlQGpiMhIcpcoi3H6pYOWHiFt0uD0d3Ci7EAeZNv7zg/perLV4pTNKorKaKIWRg2U+sqXUkH2TqNO85r6JZ+sWmjzFh0T1IqowOiG4GngCD0M0vMPGVzJSUnKozMb6A9Ab+QFz8pWKGE0KoPaGjKd/wDmYmJwbNbPdUBCnXRb9CR2mGTN109jXHc48p7dd4ZzzhcPRpUUWo6hQoqIqqjMPeyB2BIBv4a+EtXB+P4fGD/BqAsNShurD4qdbdxpKBT4dRq0RSQAoFCgDqLDQjuJXV4Tkeys1Osl2pOpK5reKnz8xLJ8iy+56Uz4Wd59X27vI3v8Spcm80/pi+prC1ZAAx0s5HvEAdD0Numtx0IFt3v8zVnU1O483eNY1c6nVN7/ADEb3+InUUb3vSTI3vesQG9943vtI3vtJ3vvAmUHmz0l0eH12wq0HrVEtmswRQzAMFzG5OjC+njL7vfaVTmD0f4LHO1aorpVe2apTcgmwAF1a69AB7sDneN9NOJP+RhKSfxlqn+nLNDi/SfxWqfZqimPKnTUfdgT95cX9E7BytLFrlJIHrKV2A7lXAJ72EzMH6HqQ1r4uo//AC0SmP8AqzH5wOUYvmDiFe/rcVXIPgajBf6Qbfaao0CTd2Fz5m5P1n6Mwno04bT1NBqh/wDsdn/6b5b/AClhwPBMNhxahh6SfwIq/cCB+ZcFyziK3+Vh6791ptl/qIt95beTuVauHxgbEJ6s0wbqzKWuwFr5SQNCD853qtUyozWvlBNvOwvac64XWL3qsbliWJ8/Fj82v9BKebXjOvy0fH4/LXd+xjuW24mpwwf1Soyu75c5JIsqAXABtrfW2mmswOGcrrgqlT1LvURWykvlF2X3iAoFhmutjfpLPyxxuiuHWwqPUdndhTpO4uWNgzhci2UKNWHSa+lxFUpEPdWztmVrZsxc3BsbXufAkSG544k/K3jvly2z7Nhy5wihiQ1XEUKbsjZUzorZFyqwygjQksdewlupoFAVQABoABYADwA8BNHyubisR09Zb6Kt/lrN/LuP9sZ+b99I3vvEb32k1RvfaN77xvfeN77QEREDRc18y0uGUBXrKzZmCKiAZmYhm6k2Gikkzm+N9NTi4o4IDyL1CfqqqLfC86jx3gWHx9MUsUmdQwZbFlKtYgEMpB6E/Wc/4p6JaQa+FxLre/s1VFQDsCpVh87wKdjPS7xOoCEFGl3SmSR/+jMPtNJiuc+KVxZ8XWA/cYU/9AE6Nh/RCzkNWxgA8qdKx/qZyB9JvMF6J+Hp/mGtVP7z5B9KYWBwPEtWqnNWqs583ct92M+2A4e7m1JHqHypoz6j+EHWfpfA8oYCgQaWEogj9YoGb+prmbqnTVRZQAPIAAfbwgfn2hgMTTVGxVCpTubIzDK2mthfRh+6bHrbzljwfDUxCMXBYMjKzDS5FradQRr8Jeudsf6uilBQpasSBmAayqBmYAi1/aUa9Lk+Eq1Flw1IKCRmZUSys5u5AZsi3ZupNgCTMm5Jr19Xo8PJu8f6r6YvC+XsYtJK1ACoCCLqwVroSpzKxAOq9QT8p82eu1Q0auGLsdSgZDl/ebWyH53PlL7g+JlKa0sNhK7KqgK1TLSXTxbO2e56+54zTcPxSrTeq4GeozO+t7Fje1/IaD4ATvJx5kc4vkb1evx/tjcKw6h6FOkuR86Ppa4VTmcX8bqGHznQt77SscuYXNVauf1RkU/vGxb6Cw+Zln3vvLOHPWWf5O/LZvfeTI3vtJlzOTzEQG9943vtI3v8yd7/ABA9RPMne96wMNXCsWYgAE3JNgPmZhVeacGpKrXWow6rQDV2B6arSDEH4zIxGFSsDTqKrqWuVdQynKQwup00IB+UyqWFVBlUWHkNB9BA1LcdqvcUMFWOmjVmSip7EFjUH9E8BsfUtd8NRHiER67drOxRQbeaGb5UA8N78J7gV48BeoLV8TiKlz09YKS/C1BVJHYkyn5DSoPTAu1NXTTxZSV/uJ1De96yjYuiBjKiEey1anb+dqZP3YynmncjV8bXV1/S3cOwK0aNOl1yU0S/X3VC/wC0qXM3BlPEKVW9lZLlR0LUmHtfRlH8svA3v/eVTmXEf+8oJbRKbsx7uVVB8PZf7SXLJcq+DVm/TN4HVWjRBfN7bv7qs5uztl0UEgZQNTpLBK5wXjNJcmFqEI4GVMxsKoHTI3QtbUr162uNZY53PXjOkOSWavZEiN7/ADJoJiRvf4je/wAwJiIgJi4rqPgZlTGxXUfP/aBiYnjmGw9lrYikjWFkZ1znQdEvmJ7ATFbmZWv+j4fFVvD2aRpr8mrlFI7gmZuE4bTS7U0RC5LsUUKWZjmJYgakkkk95miio8PrA0RxuPqEhKNCiPBqjtVbwtemiqvn0qT1/wANxVSxq4yoPNaKJRU/1B3Hyeb4C3SIHPuaOFLhnpVFZ2zCopNSo9QknIVsXY2GjaDSRy5g/wBIxqsQcmGQuP8AmPdE+Nl9YbedpuefUvRonyrqD8Cj3/sJl8o4cJQZx1eo5J/hOQD4ez95n675Wvy6+P8A56bwIB0AnK6XC6lSpUfNdDXqerQHRr1GyBj5dCewnROPYxqGHqVEF2AsvlmYhVJ8gCQe9pV+E4unhEotVzFVUh2AzZGIAzsBrl94aXteS5erZmufHtznWotfB1RaKrSzZV0uyshY/rMQwBuTc+Wukzt77T5YfEJUQVKbK6sAVdGDKw8CGGhHefXe/wAS5mt7N77yI3v8xDhESIDe/wARvf5iTvfaAlaxfC8XUY1qeIqYdwSAgZa9Fh4Eo6gj5ZSJZJMCv4rilTC00erQq12sPWHDIpANhmYIz57XubAMZkcI5mwmLOShXUuL3ptdKgt1vTcBvtabZkB6zBw/DMpLVGzv0V8iK4H7JYCxt52EDY73+Y3v8SN77T1Aje96TlPMeNr0cRVSpmQs7PTdRoy5r02B6G3sj4idXmHjuH08QuWsisB0v1F/I9RIbz5Tpbxcnhrtq+V+Y0xtOxslVR7afbMvmpPh1F9fAnb4vA06tjUUMR0OoP1Ew8Hy/h6NQVadPKwvYgnS4sR18ptN77Tsl69o6smu89tHxDlihWXLaw8RbMp75T0PwtM7hOBOHpLSLl8vQt1AvovcDwv0mfETMl7jl3bOrSN7/ERvfeSRN7/Mb3+I3vtEBERA1PGsJUr5aas9NCLmpSqZHVvD2StmX5n4TEwdHFUA4xFU4lQP8MhESp0N1c5gjk+zY+z43lhkb32gVjDc64YEUsVnwj9AuJX1atbxWoCaZH80stNgwDKQQdQQbgjwsR1+MwsVw/O4JYZOjU2RWVj1BudQ31HaZdGkEGUdPDyHYAdBA+sRECnekCpVpijVRc1Nc4qG18jNkyMR5aOL+ZE1nKHNoVv0euQFZiadTQBSxuUceGpuD31t1nQKiBlKsAQRYgi4IOhBHl2mlq8qYRib0rXPgT9Osrub5eUXZ3nw8dN1Vph1KsAQdCDqD8d6TX1eCUGBATKf2gTcfC5/voZsKSBFCL0UADx0Gk9Sdkv1Vy2fStFwnl0YWqalN7KwOdALKxPQkXtcefWb3e/zEb32iST1HLq2903v8RG995E64b3vWIj6/WBO99o3vvG9943vtAb32kRECY3vtIk733gN77xvfaN77RvfeAnqeYgTvfaN77xvfeRvfaBO99pMje+8mAkb32kyN77wG9943vtG99o3vvAmIiBG99o3vvG9943vtAb32kyN77yYCRvfaTPO994E733kb32je+0b33gIiIDe+0b33kSd77QG99pEne+8iAiIgDERAiTEQAiIgIiIEwIiAnqIgeZ6iICIiAiIgIiICIiAkGTEDzBiICIiAkREBERAREQESIgf/9k=",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Deadlift",
                        equipment:"Barbell",
                        set:"3",
                        reps:"6-10",
                        utube:"https://www.youtube.com/watch?v=XxWcirHIwVo&pp=ygUIZGVhZGxpZnQ%3D",
                        wimg:"https://www.garagegymreviews.com/wp-content/uploads/deadlift-muscles-worked.jpg",

                        checked:false
                    },
                   
                    
            

                ],
                // checked:false
            },
            2:{
               
                dayname:"Day2",
                goal:"Cardio and agility",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Interval running",
                        equipment:"None",
                        set:"5",
                        reps:"2 min",
                        utube:"https://www.youtube.com/watch?v=KxKJEIqS1HQ&pp=ygUQaW50ZXJ2YWwgcnVubmluZw%3D%3D",
                        wimg:"https://fitpage.in/wp-content/uploads/2021/11/Article31.png",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Cone Drills",
                        equipment:"Cone",
                        set:"3",
                        reps:"10 minutes",
                        utube:"https://www.youtube.com/watch?v=MCvNd4hBK4A&pp=ygULY29uZSBkcmlsbHM%3D",
                        wimg:"https://aktwmdthdq.cloudimg.io/v7/file.sportlane.com/blog/uploads/b2e7edeec2ff400f90518af7f430310d.jpg?width=800",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Jump rope",
                        equipment:"Jump rope",
                        set:"4",
                        reps:"10 minutes",
                        utube:"https://www.youtube.com/watch?v=1BZM2Vre5oc&pp=ygUJanVtcCByb3Bl",
                        wimg:"https://www.realsimple.com/thmb/LqkRwhYXpPBcmq5rnYIYJrX5SeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-jump-illo2-1-d4bcbd6792b3491f8f90fe26cb0a956c.jpg",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Side to Side shuffle",
                        equipment:"None",
                        set:"3",
                        reps:"5",
                        utube:"https://www.youtube.com/watch?v=DwHiXO5ps_I&pp=ygUSc2lkZSB0byBzaWRlIHNodWZm",
                        wimg:"https://cdn3.vectorstock.com/i/1000x1000/63/67/woman-doing-side-shuffle-exercise-flat-vector-41366367.jpg",

                        checked:false
                    },
                   
                    
            

                ],
                // checked:false
            },
            3:{
               
                dayname:"Day3",
                goal:"Training",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Batting Drills",
                        equipment:"Cricket Bat",
                        set:"1",
                        reps:"20 minutes",
                        utube:"https://www.youtube.com/watch?v=KY8gsVeKn0w&pp=ygUWYmF0dGluZyBkcmlsbHMgY3JpY2tldA%3D%3D",
                        wimg:"https://fitpage.in/wp-content/uploads/2021/11/Article31.png",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Bowling drills",
                        equipment:"Cricket ball",
                        set:"3",
                        reps:"10 minutes",
                        utube:"https://www.youtube.com/watch?v=TQRA8vXyShw&pp=ygUWYm93bGluZyBkcmlsbHMgY3JpY2tldA%3D%3D",
                        wimg:"https://www.sportplan.net/viewer/movies/Cricket/thumbs/C602011.gif",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Fielding Drills",
                        equipment:"Cricket ball",
                        set:"1",
                        reps:"20 minutes",
                        utube:"https://www.youtube.com/watch?v=TeykQ0-2cNM&pp=ygUPZmllbGRpbmcgZHJpbGxz",
                        wimg:"https://www.sportplan.net/viewer/movies/Cricket/thumbs/c32013.gif",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Sprint in intervals",
                        equipment:"None",
                        set:"4",
                        reps:"4 minutes",
                        utube:"https://www.youtube.com/watch?v=QLBT4-iN2yg&pp=ygUYc3ByaW50IGludGVydmFsIHRyYWluaW5n",
                        wimg:"https://ambitusfitness.com/wp-content/uploads/2023/01/Sprint-Interval-Training-Logo.png",

                        checked:false
                    },
                    
                    
            

                ],
                // checked:false
            },
            
            4:{
               
                dayname:"Day4",
                goal:"High intensity interval training",
                duration:"4workouts/1hr",
                exc:[
                    {
                        id:1,
                        name:"Burpees and/or sprinting(HIIT)",
                        equipment:"None",
                        set:"3",
                        reps:"15",
                        utube:"https://www.youtube.com/watch?v=xQdyIrSSFnE&pp=ygUHYnVycGVlcw%3D%3D",
                        wimg:"https://images.healthshots.com/healthshots/en/uploads/2023/03/16013822/Burpees.jpg",

                        checked:false
                    },
                    {
                        id:2,
                        name:"Squats",
                        equipment:"None",
                        set:"3",
                        reps:"15",
                        utube:"https://www.youtube.com/watch?v=IB_icWRzi4E&pp=ygUGc3F1YXRz",
                        wimg:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Squats.svg/1200px-Squats.svg.png",

                        checked:false
                    },
                    {
                        id:3,
                        name:"Mountain climbers",
                        equipment:"None",
                        set:"3",
                        reps:"20",
                        utube:"https://www.youtube.com/watch?v=nmwgirgXLYM&pp=ygURbW91bnRhaW4gY2xpbWJlcnM%3D",
                        wimg:"https://media.istockphoto.com/id/957699448/vector/step-of-doing-the-mountain-climber-exercise-by-healthy-woman.jpg?s=612x612&w=0&k=20&c=VNul5Y5u4xaNBFhfXl2MxeWXek3jUwEAC4_axjLgQos=",

                        checked:false
                    },
                    {
                        id:4,
                        name:"Shuttle Sprinters",
                        equipment:"None",
                        set:"4",
                        reps:"5 minutes",
                        utube:"https://www.youtube.com/watch?v=X90cZnmCdmw&pp=ygUZc2h1dHRsZSBzcHJpbnRlcnMgY3JpY2tldA%3D%3D",
                        wimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiPZCvxTYxC2SMBvmyW8U7TaHSjI90G8TkFId3kwZT7Ce3GUmfnqbqz4XdlBltaCY-AY&usqp=CAU",

                        checked:false
                    },
                    
                    
                    
            

                ],
                // checked:false
            },
        },
        checked:false
    }
   
]
export default sport_place