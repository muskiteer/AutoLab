from playwright.sync_api import sync_playwright

# CONFIG
URL = "https://auto-lab-xi.vercel.app/level-1/index.html"
USERNAME = "Automata"
PASSWORD = "AutoLab"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            channel="chrome",
            headless=False,
            slow_mo=300
        )

        page = browser.new_page()

        # Open login page
        page.goto(URL)

        # Login
        page.fill('input[name="username"]', USERNAME)
        page.fill('input[name="password"]', PASSWORD)
        page.click('button[type="submit"]')

        # wait for the task 1 to load 
        page.wait_for_timeout(2000)

        # Get all task cards
        task_cards = page.locator(".task-card")

        # Count cards
        count = task_cards.count()

        print(f"\nFound {count} task cards\n")

        pending_tasks = []

        # Loop through each card
        for i in range(count):
            card = task_cards.nth(i)

            try:
                # Get status text
                status = card.locator(".status-indicator").inner_text().strip()

                # Skip completed tasks
                if status.lower() == "completed":
                    print(f"Skipping completed task #{i + 1}")
                    continue

                # Get task title
                title = card.locator(".task-title").inner_text().strip()

                pending_tasks.append(title)

                print(f"Pending Task: {title}")

            except Exception as e:
                print(f"Error processing card #{i + 1}: {e}")

        print("\n===== REMAINING TASKS =====")

        for task in pending_tasks:
            print(task)

        browser.close()

if __name__ == "__main__":
    run()